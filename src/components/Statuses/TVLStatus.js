"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";
import Typography from "@/components/Typography";

function TVLStatus(props) {
  const { wstETHvsUSDPrice, currentDeposits = 0 } = useContractsData();
  console.log("currentDeposits=", currentDeposits);
  console.log("wstETHvsUSDPrice=", wstETHvsUSDPrice);

  const tvlValue = BigNumber(wstETHvsUSDPrice)
    .multipliedBy(formatEther(currentDeposits))
    .toFixed(2);

  return (
    <StatusBar
      title={"TVL"}
      hint={
        <div className={"max-w-72"}>
          <Typography>TVL (Total Value Locked):</Typography>
          <Typography>
            TVL represents the total amount of assets, in terms of value, that
            are currently invested or locked in SupremeDAO&apos;s strategies.
          </Typography>
        </div>
      }
      value={`$ ${tvlValue}`}
      {...props}
    />
  );
}

export default TVLStatus;
