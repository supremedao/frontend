"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { formatEther } from "ethers/lib/utils";
import { useContractsData } from "@/Context/ContractsDataProvider";

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
