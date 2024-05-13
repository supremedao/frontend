"use client";
import StatusBar from "@/components/StatusBar";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";

function CurrentBalanceStatus(props) {
  const { wstEthBalance, balanceOf, totalSupply, userState, wstETHvsUSDPrice } =
    useContractsData();
  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    wstETHvsUSDPrice,
  });

  return (
    <StatusBar
      title={"Your current Balance"}
      value={`${BigNumber(wstEthBalance).toFixed(3)} wstETH / ${amount.isNaN() ? "-" : amount.toFixed(2)} USD`}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
