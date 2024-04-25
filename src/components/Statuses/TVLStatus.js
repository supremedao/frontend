"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";

function TVLStatus(props) {
  const { wstETHvsUSDPrice, currentDeposits } = useContractsData();

  const tvlValue =
    currentDeposits && wstETHvsUSDPrice && currentDeposits
      ? BigNumber(wstETHvsUSDPrice)
          .multipliedBy(formatEther(currentDeposits))
          .toFixed(2)
      : "-";

  return <StatusBar title={"TVL"} value={`$ ${tvlValue}`} {...props} />;
}

export default TVLStatus;
