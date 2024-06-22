import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContracts } from "wagmi";

export function useReadLeverageStrategy() {
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
      enabled: !!account?.address,
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
  console.log("useReadLeverageStrategy", data);
  return data?.map((value) => value.result) || [];
}
