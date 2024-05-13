"use client";
import StatusBar from "@/components/StatusBar";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";

function CurrentBalanceStatus(props) {
  const {
    currentBalance,
    balanceOf,
    totalSupply,
    userState,
    wstETHvsUSDPrice,
  } = useContractsData();
  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    wstETHvsUSDPrice,
  });

  return (
    <StatusBar
      title={"Your current Balance"}
      value={`${!currentBalance.isNaN() ? currentBalance.toFixed(3) : 0} wstETH / ${amount.isNaN() ? "-" : amount.toFixed(2)} USD`}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
