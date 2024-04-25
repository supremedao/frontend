import { useEffect, useState } from "react";
import { useCalls, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

// Calculate the summ of summ = user_state[0] * wstETHPrice + user_state[1] - this will return overall value locked in usd
// Return balanceOf/totalSupply * summ, it will return current user balance
export function useLeverageStrategyRead() {
  const [leverageAbi, setLeverageAbi] = useState(false);
  const { account, chainId } = useEthers();

  useEffect(() => {
    if (!leverageAbi) {
      Promise.all([import("@/contracts/abi/leverage-strategy.json")]).then(
        ([leverageAbiResponse]) => {
          setLeverageAbi(leverageAbiResponse.default);
        },
      );
    }
  }, [leverageAbi]);

  const contract =
    leverageAbi && new Contract(ADDRESSES.LEVERAGE_STRATEGY, leverageAbi);
  const calls =
    leverageAbi && account
      ? [
          {
            contract,
            method: "balanceOf",
            args: [account],
          },
          {
            contract,
            method: "totalSupply",
            args: [],
          },
          {
            contract,
            method: "currentDeposits",
            args: [],
          },
          {
            contract,
            method: "fee",
            args: [],
          },
        ]
      : [];
  const results = useCalls(calls) ?? [];
  results.forEach((result, idx) => {
    if (result && result.error) {
      console.error(
        `Error encountered calling 'totalSupply' on ${calls[idx]?.contract.address}: ${result.error.message}`,
      );
    }
  });
  console.log("useLeverageStrategyRead", results);
  return results.map((result) => result?.value?.[0]);
}
