import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContracts } from "wagmi";

// Calculate the summ of summ = user_state[0] * wstETHPrice + user_state[1] - this will return overall value locked in usd
// Return balanceOf/totalSupply * summ, it will return current user balance
export function useLeverageStrategyRead() {
  const [leverageAbi, setLeverageAbi] = useState(false);
  const account = useAccount();

  useEffect(() => {
    if (!leverageAbi) {
      Promise.all([import("@/contracts/abi/leverage-strategy.json")]).then(
        ([leverageAbiResponse]) => {
          setLeverageAbi(leverageAbiResponse.default);
        },
      );
    }
  }, [leverageAbi]);

  const contract = { address: ADDRESSES.LEVERAGE_STRATEGY, abi: leverageAbi };

  const contracts = [
    {
      ...contract,
      functionName: "balanceOf",
      args: [account?.address],
      enabled: !!account,
    },
    {
      ...contract,
      functionName: "totalSupply",
      args: [],
      enabled: !!account,
    },
    {
      ...contract,
      functionName: "currentDeposits",
      args: [],
      enabled: !!account,
    },
    {
      ...contract,
      functionName: "fee",
      args: [],
      enabled: !!account,
    },
  ];
  const { data, error } = useReadContracts({ contracts });

  if (error) {
    console.error(
      `[useLeverageStrategyRead] Error encountered calling on ${contract.address}: ${error}`,
    );
  }
  console.log("useLeverageStrategyRead", data);
  return data?.map((value) => value.result) || [];
}
