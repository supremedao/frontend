import BigNumber from "bignumber.js";
import { formatEther } from "viem";

export function convertEthToUsd(amount, ethToUsdRate) {
  if (!ethToUsdRate) return 0;
  return BigNumber(amount).div(Math.pow(10, 18)).multipliedBy(ethToUsdRate);
}

export function getRewardPerYear(rewardRate) {
  if (!rewardRate) return 0;
  return BigNumber(rewardRate)
    .multipliedBy(86_400 * 365)
    .div(Math.pow(10, 18));
}

export function calculateBalAPR({
  auraVaultData = [],
  rewardTokenPrice,
  poolTVL,
}) {
  // rewardPerRate, rewardTokenPrice, poolTVL
  const [rewardRate] = auraVaultData;
  if (!rewardRate) return 0;
  const rewardPerYear = getRewardPerYear(rewardRate);
  const rewardPerYearUsd = rewardPerYear.multipliedBy(rewardTokenPrice);
  const value = rewardPerYearUsd.div(poolTVL).multipliedBy(100);
  return value;
}

export const getAuraMintAmount = (balEarned, auraData) => {
  const [reductionPerCliff, maxSupply, totalSupply, totalCliffs] = auraData;
  const minterMinted = BigNumber(0);

  // e.g. emissionsMinted = 6e25 - 5e25 - 0 = 1e25;
  const emissionsMinted = BigNumber(totalSupply)
    .minus(maxSupply)
    .minus(minterMinted);

  // e.g. reductionPerCliff = 5e25 / 500 = 1e23
  // e.g. cliff = 1e25 / 1e23 = 100
  const cliff = emissionsMinted.div(BigNumber(reductionPerCliff));

  // e.g. 100 < 500
  if (cliff.lt(totalCliffs)) {
    // e.g. (new) reduction = (500 - 100) * 2.5 + 700 = 1700;
    // e.g. (new) reduction = (500 - 250) * 2.5 + 700 = 1325;
    // e.g. (new) reduction = (500 - 400) * 2.5 + 700 = 950;
    const reduction = BigNumber(totalCliffs)
      .minus(cliff)
      .multipliedBy(5)
      .div(2)
      .plus(700);
    // e.g. (new) amount = 1e19 * 1700 / 500 =  34e18;
    // e.g. (new) amount = 1e19 * 1325 / 500 =  26.5e18;
    // e.g. (new) amount = 1e19 * 950 / 500  =  19e17;
    let amount = BigNumber(balEarned).multipliedBy(reduction).div(totalCliffs);

    // e.g. amtTillMax = 5e25 - 1e25 = 4e25
    const amtTillMax = BigNumber(maxSupply).minus(emissionsMinted);
    if (amount.gt(amtTillMax)) {
      amount = amtTillMax;
    }

    return amount;
  }
  return BigNumber.from(0);
};

export function calculateAuraAPR({
  balancerPrice,
  auraData,
  auraVaultData,
  auraPrice,
  tvl,
  fee,
}) {
  if (auraData.length === 0 || auraVaultData.length === 0) return;

  const [rewardRate] = auraVaultData;
  const rewardPerYear = getRewardPerYear(rewardRate);
  const balEarnedUSD = calculateBalAPR({
    auraVaultData,
    rewardTokenPrice: balancerPrice,
    poolTVL: tvl,
  });
  const auraPerYear = getAuraMintAmount(rewardPerYear, auraData);
  const auraPerYearUsd = BigNumber(auraPerYear).multipliedBy(auraPrice);
  const value = auraPerYearUsd.div(tvl).multipliedBy(100).plus(balEarnedUSD);

  // minus fee
  return value.minus(value.multipliedBy(fee));
}

export function generateTimestamps(days = 30) {
  const today = new Date();
  const timestamps = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    date.setHours(0, 0, 0, 0);
    timestamps.push(date.getTime());
  }
  return timestamps.sort((a, b) => b - a);
}

export function calculateWstEthBalanceInUSD({
  balanceOf,
  totalSupply,
  userState,
  summ,
  wstETHvsUSDPrice,
}) {
  const amount = BigNumber(balanceOf).div(totalSupply).multipliedBy(summ);

  console.log(`=========== WST Balance in USD ========
    amount=${amount}
    balanceOf=${balanceOf}
    totalSupply=${totalSupply}
    summ=${summ}
  `);

  return !amount.isNaN() ? formatEther(amount) : 0;
}
