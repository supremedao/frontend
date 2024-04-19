import { useCall, useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

export function useHealthStatus() {
  const { account } = useEthers();
  const [abi, setAbi] = useState();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const { value, error } =
    useCall(
      abi &&
        account && {
          contract: new Contract(ADDRESSES.LEVERAGE_STRATEGY, abi),
          method: "strategyHealth",
          args: [],
        },
    ) ?? {};

  if (error) {
    console.error(error.message);
    return 0;
  }

  return value?.[0];
}
