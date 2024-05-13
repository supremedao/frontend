"use client";
import StatusBar from "@/components/StatusBar";
import { formatEther } from "viem";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";

// Total Rewards earned
// Get user shares by calling balanceOf in LeverageStrategy and total shares by calling totalSupply()
// Get the summ from current balance
// calculate rew = summ - currentDeposits()
// return balanceOf/totalSupply * rew for specific person

function TotalRewardsEarnedStatus(props) {
  const {
    balanceOf,
    totalSupply,
    userState,
    wstEthBalance,
    currentDeposits,
    wstETHvsUSDPrice,
  } = useContractsData();
  const summ = BigNumber(userState?.[0])
    .multipliedBy(wstETHvsUSDPrice)
    .plus(userState?.[1])
    .toFixed(0);
  const rew = BigNumber(summ).minus(formatEther(currentDeposits || ""));
  const amount = BigNumber(balanceOf).div(totalSupply).multipliedBy(rew);
  console.log(`
    balanceOf=${balanceOf}
    wstEthBalance=${wstEthBalance}
    totalSupply=${totalSupply}
    currentDeposits=${currentDeposits}
    formattedCurrentDeposits=${formatEther(currentDeposits || "")}
    wstETHvsUSDPrice=${wstETHvsUSDPrice}
    userState[0]=${userState?.[0]}
    userState[1]=${userState?.[1]}
    summ=${summ}, 
    rew=${rew}
    amount=${amount?.toFixed(3)}
  `);

  return (
    <StatusBar
      title={"Total Rewards Earned"}
      value={`${BigNumber(amount).div(wstETHvsUSDPrice).toFixed(3)} wstETH / ${amount.isNaN() ? "" : amount.toFixed(3)} USD`}
      {...props}
    />
  );
}

export default TotalRewardsEarnedStatus;
