"use client";
import StatusBar from "@/components/StatusBar";
import { formatEther } from "ethers/lib/utils";
import BigNumber from "bignumber.js";
import { useWstEthPrice } from "@/hooks/useWstEthPrice";
import { useLeverageStrategyRead } from "@/hooks/useLeverageStrategyRead";
import { useContractsData } from "@/Context/ContractsDataProvider";

function CurrentBalanceStatus(props) {
  const { balanceOf, totalSupply, wstEthBalance, summ } = useContractsData();

  const amount = BigNumber(balanceOf).div(totalSupply).multipliedBy(summ);

  return (
    <StatusBar
      title={"Your current Balance"}
      value={`${wstEthBalance || "N/A"} wstETH / ${amount.isNaN() ? "-" : amount.toFixed(2)} USD`}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
