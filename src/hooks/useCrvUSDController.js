import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContracts } from "wagmi";

export function useCrvUSDController() {
  const account = useAccount();
  const [abi, setAbi] = useState();

  useEffect(() => {
    import("@/contracts/abi/crv-usd-controller.json").then(
      (crvUSDAbiResponse) => {
        setAbi(crvUSDAbiResponse.default);
      },
    );
  }, []);

  const contracts = [
    {
      address: ADDRESSES.CRV_USD_CONTROLLER,
      abi,
      functionName: "user_state",
      args: [account?.address],
      enabled: !!account.address,
    },
    {
      address: ADDRESSES.CRV_USD_CONTROLLER,
      abi,
      functionName: "debt",
      args: [ADDRESSES.LEVERAGE_STRATEGY],
      enabled: !!account.address,
    },
    {
      address: ADDRESSES.CRV_USD_CONTROLLER,
      abi,
      functionName: "user_prices",
      args: [ADDRESSES.LEVERAGE_STRATEGY],
      enabled: !!account.address,
    },
    {
      address: ADDRESSES.CRV_USD_CONTROLLER,
      abi,
      functionName: "user_state",
      args: [ADDRESSES.LEVERAGE_STRATEGY],
      enabled: !!account.address,
    },
  ];

  const { data, error } = useReadContracts({ contracts });

  data?.forEach(({ error }) => {
    if (error) {
      console.error(
        `[useCrvUSDController] Error encountered calling on ${error.contractAddress}: ${error.message}`,
      );
    }
  });
  console.log("useCrvUSDController", data);
  return data?.map((value) => value.result) || [];
}
