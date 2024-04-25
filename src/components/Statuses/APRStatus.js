"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { formatEther } from "ethers/lib/utils";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { useQuery } from "@apollo/client";
import { GET_BALANCER_POOL } from "@/api/graphql/queries";

export const getAuraMintAmount = (balEarned, auraData, options = {}) => {
  const [reductionPerCliff, maxSupply, totalSupply, totalCliffs] = auraData;
  const minterMinted = BigNumber.from(0);

  // e.g. emissionsMinted = 6e25 - 5e25 - 0 = 1e25;
  const emissionsMinted = totalSupply.sub(maxSupply).sub(minterMinted);

  // e.g. reductionPerCliff = 5e25 / 500 = 1e23
  // e.g. cliff = 1e25 / 1e23 = 100
  const cliff = emissionsMinted.div(reductionPerCliff);

  // e.g. 100 < 500
  if (cliff.lt(totalCliffs)) {
    // e.g. (new) reduction = (500 - 100) * 2.5 + 700 = 1700;
    // e.g. (new) reduction = (500 - 250) * 2.5 + 700 = 1325;
    // e.g. (new) reduction = (500 - 400) * 2.5 + 700 = 950;
    const reduction = totalCliffs.sub(cliff).mul(5).div(2).add(700);
    // e.g. (new) amount = 1e19 * 1700 / 500 =  34e18;
    // e.g. (new) amount = 1e19 * 1325 / 500 =  26.5e18;
    // e.g. (new) amount = 1e19 * 950 / 500  =  19e17;
    let amount = BigNumber(balEarned).mul(reduction).div(totalCliffs);

    // e.g. amtTillMax = 5e25 - 1e25 = 4e25
    const amtTillMax = maxSupply.sub(emissionsMinted);
    if (amount.gt(amtTillMax)) {
      amount = amtTillMax;
    }

    return amount;
  }

  return BigNumber.from(0);
};

function calculateAuraAPR(auraData) {
  const auraPerYear = getAuraMintAmount(rewardPerYear, auraData);
  const auraPerYearUsd = BigNumber(auraPerYear) * auraPrice;
  const value = (auraPerYearUsd / tvl) * 100;

  return value;
}

function APRStatus(props) {
  const { wstETHvsUSDPrice, currentDeposits, auraData, auraVaultData } =
    useContractsData();
  console.log("aprData", auraData, auraVaultData);
  const { data, error } = useQuery(GET_BALANCER_POOL, {
    variables: {
      id: "0x27c9f71cc31464b906e0006d4fcbc8900f48f15f00020000000000000000010f",
    },
  });

  const totalLiquidity = data?.pool?.totalLiquidity;

  const aprValue = 0; //calculateAuraAPR(auraData);

  return <StatusBar title={"APR"} value={`$ ${aprValue}`} {...props} />;
}

export default APRStatus;
