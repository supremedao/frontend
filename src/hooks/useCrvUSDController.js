import { useCalls, useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

export function useCrvUSDController() {
  const { account } = useEthers();
  const [abi, setAbi] = useState();

  useEffect(() => {
    import("@/contracts/abi/crv-usd-controller.json").then(
      (crvUSDAbiResponse) => {
        setAbi(crvUSDAbiResponse.default);
      },
    );
  }, []);

  const calls =
    abi && account
      ? [
          {
            contract: new Contract(ADDRESSES.CRV_USD_CONTROLLER, abi),
            method: "user_state",
            args: [account],
          },
          {
            contract: new Contract(ADDRESSES.CRV_USD_CONTROLLER, abi),
            method: "debt",
            args: [ADDRESSES.LEVERAGE_STRATEGY],
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
  console.log("useCrvUSDController", results);
  return results.map((result) => result?.value?.[0]);
}
