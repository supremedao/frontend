"use client";
import StatusBar from "@/components/StatusBar";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";
import { useCurrentWSTBalance } from "@/hooks/useCurrentWSTBalance";

function CurrentBalanceStatus(props) {
  const { balanceOf, summ, totalSupply, userState, wstETHvsUSDPrice } =
    useContractsData();
  const currentBalance = useCurrentWSTBalance();

  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    summ,
    wstETHvsUSDPrice,
  });

  return (
    <StatusBar
      title={"Your current Balance"}
      value={`${currentBalance} wstETH / ${amount} USD`}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
