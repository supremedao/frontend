"use client";
import { useEffect, useState } from "react";
import StatusBar from "@/components/StatusBar";
import { ADDRESSES } from "@/contracts/addresses";
import { useCall, useCalls, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { formatEther } from "ethers/lib/utils";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";

// Total Rewards earned
// Get user shares by calling balanceOf in LeverageStrategy and total shares by calling totalSupply()
// Get the summ from current balance
// calculate rew = summ - currentDeposits()
// return balanceOf/totalSupply * rew for specific person

function TotalRewadsEarnedStatus(props) {
  const { balanceOf, totalSupply, wstEthBalance, currentDeposits, summ } =
    useContractsData();

  const rew = BigNumber(summ).minus(currentDeposits);
  const amount = BigNumber(balanceOf).div(totalSupply).multipliedBy(rew);
  const wstEth = `${currentDeposits ? formatEther(currentDeposits) : 0} wstETH`;
  const vs_usd = `${currentDeposits ? BigNumber(formatEther(currentDeposits)).multipliedBy(0) : 0} USD`;

  return (
    <StatusBar
      title={"Total Rewards Earned"}
      value={`${wstEthBalance} wstETH / ${amount.isNaN() ? "-" : amount.toFixed(2)} USD`}
      {...props}
    />
  );
}

export default TotalRewadsEarnedStatus;
