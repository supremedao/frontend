"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
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
