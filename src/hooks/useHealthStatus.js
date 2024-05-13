import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContract } from "wagmi";

export function useHealthStatus() {
  const [abi, setAbi] = useState();
  const account = useAccount();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const { data: value, error } = useReadContract({
    address: ADDRESSES.LEVERAGE_STRATEGY,
    abi,
    functionName: "strategyHealth",
    args: [],
    enabled: !!account,
  });

  if (error) {
    if (error.message?.includes("Loan doesn't exist")) return 0;
    console.error(
      `[useHealthStatus] Error encountered calling on ${ADDRESSES.LEVERAGE_STRATEGY}: ${error}`,
    );
    return 0;
  }

  return value;
}
