"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";

function TVLStatus(props) {
  const { wstETHvsUSDPrice, currentDeposits = 0 } = useContractsData();
  console.log("currentDeposits=", currentDeposits);
  console.log("wstETHvsUSDPrice=", wstETHvsUSDPrice);

  const tvlValue = BigNumber(wstETHvsUSDPrice)
    .multipliedBy(formatEther(currentDeposits))
    .toFixed(2);

  return <StatusBar title={"TVL"} value={`$ ${tvlValue}`} {...props} />;
}

export default TVLStatus;
