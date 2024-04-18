import { useEffect, useState } from "react";
import { useCalls, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

// Calculate the summ of summ = user_state[0] * wstETHPrice + user_state[1] - this will return overall value locked in usd
// Return balanceOf/totalSupply * summ, it will return current user balance
export function useCurrentBalance() {
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

  const calls =
    leverageAbi && account
      ? [
          {
            contract: new Contract(ADDRESSES.LEVERAGE_STRATEGY, leverageAbi),
            method: "balanceOf",
            args: [account],
          },
          {
            contract: new Contract(ADDRESSES.LEVERAGE_STRATEGY, leverageAbi),
            method: "totalSupply",
            args: [],
          },
          {
            contract: new Contract(ADDRESSES.LEVERAGE_STRATEGY, leverageAbi),
            method: "currentDeposits",
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
  console.log(results);
  return results.map((result) => result?.value?.[0]);
}
