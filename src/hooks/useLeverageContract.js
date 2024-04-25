import { useEffect, useMemo, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useGasPrice, useAccount, useWriteContract } from "wagmi";

export function useLeverageContract() {
  const account = useAccount();
  const [abi, setAbi] = useState();
  const gasPrice = useGasPrice();
  const { writeContract, status } = useWriteContract();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const contract = { address: ADDRESSES.LEVERAGE_STRATEGY, abi };

  const stake = (amount) => {
    return writeContract({
      ...contract,
      functionName: "depositAndInvest",
      args: [amount, account?.address, 123n],
    });
    // stakeFn(amount, account, 0, {
    //   gasPrice,
    //   gasLimit: 970000,
    // });
  };
  const withdraw = (amount) => {
    return writeContract({
      abi,
      address: ADDRESSES.LEVERAGE_STRATEGY,
      functionName: "redeemWstEth",
      args: [amount, account?.address, account?.address, 123n],
    });
    // withdrawFn(amount, account, account, 0, {
    //   gasPrice,
    //   gasLimit: 970000,
    // });
  };

  return { stake, withdraw, stakeState: status, withdrawState: status };
}
