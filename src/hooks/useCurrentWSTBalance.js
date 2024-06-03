import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";

export function useCurrentWSTBalance() {
  const { balanceOf, totalSupply, summ, wstETHvsUSDPrice } = useContractsData();

  const currentBalance = BigNumber(balanceOf)
    .div(totalSupply)
    .multipliedBy(summ)
    .div(wstETHvsUSDPrice);

  console.log(`================= currentBalance ========
    currentBalance=${currentBalance}
    balanceOf=${balanceOf}
    totalSupply=${totalSupply}
    summ=${summ}
    wstETHvsUSDPrice=${wstETHvsUSDPrice}
  `);

  return !currentBalance.isNaN() ? formatEther(currentBalance) : 0;
}
