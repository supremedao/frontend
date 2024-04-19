import { useCall, useEthers } from "@usedapp/core";
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

  const { value, error } =
    useCall(
      abi &&
        account && {
          contract: new Contract(ADDRESSES.CRV_USD_CONTROLLER, abi),
          method: "user_state",
          args: [account],
        },
    ) ?? {};

  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
}
