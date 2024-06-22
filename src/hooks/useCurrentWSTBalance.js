import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";

export function useCurrentWSTBalance() {
  const { balanceOf, totalSupply, summ, wstETHvsUSDPrice } = useContractsData();

  const currentBalance = BigNumber(formatEther(balanceOf || ""))
    .div(formatEther(totalSupply || ""))
    .multipliedBy(formatEther(summ || ""))
    .div(wstETHvsUSDPrice);

  console.log(`================= currentBalance ========
    currentBalance=${currentBalance}
    balanceOf=${balanceOf}
    totalSupply=${totalSupply}
    summ=${summ}
    wstETHvsUSDPrice=${wstETHvsUSDPrice}
  `);

  return !currentBalance.isNaN() ? BigNumber(currentBalance).toFixed(5, 1) : 0;
}
