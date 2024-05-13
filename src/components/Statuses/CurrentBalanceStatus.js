"use client";
import StatusBar from "@/components/StatusBar";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateWstEthBalanceInUSD } from "@/helpers";

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
      value={`${wstEthBalance} wstETH / ${amount.isNaN() ? "-" : amount.toFixed(2)} USD`}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
