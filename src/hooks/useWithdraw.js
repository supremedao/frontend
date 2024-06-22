import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import {
  useGasPrice,
  useAccount,
  useWriteContract,
  useEstimateGas,
  useWaitForTransactionReceipt,
} from "wagmi";
import BigNumber from "bignumber.js";

export function useWithdraw() {
  const account = useAccount();
  const [abi, setAbi] = useState();

  const {
    data: hash,
    writeContractAsync,
    isPending,
    status,
    error,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  const { data: estimationData } = useEstimateGas({
    to: ADDRESSES.LEVERAGE_STRATEGY,
    account: account?.address,
  });

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const withdraw = (amount) => {
    return writeContractAsync({
      abi,
      address: ADDRESSES.LEVERAGE_STRATEGY,
      functionName: "redeemWstEth",
      args: [amount, account?.address, account?.address, 0],
      enabled: !!account?.address,
    });
  };

  console.log("error", error);

  return {
    withdraw,
    status,
    error,
    isPending,
    isConfirming,
    isConfirmed,
  };
}
