import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContract } from "wagmi";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateHealth } from "@/helpers";
import BigNumber from "bignumber.js";
import { formatEther } from "viem";

export function useHealthStatus() {
  const [abi, setAbi] = useState();
  const account = useAccount();
  const { liqDiscount, user_prices, userState, ethereumVsUSDPrice } =
    useContractsData();
  const debt = BigNumber(userState?.[2]).div(Math.pow(10, 18));
  const minRange = BigNumber(formatEther(user_prices?.[1] || ""));
  const maxRange = BigNumber(formatEther(user_prices?.[0] || ""));
  const formattedUserState = BigNumber(userState?.[0]).div(Math.pow(10, 18));
  const s = minRange.plus(maxRange).div(2).multipliedBy(formattedUserState);
  const p = BigNumber(ethereumVsUSDPrice)
    .minus(maxRange)
    .multipliedBy(formattedUserState);
  const value = calculateHealth({ p, s, debt, liqDiscount });

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  console.log("----- useHealthStatus", value);
  return value?.multipliedBy(100).toFixed(2);
}
