import { useEffect, useMemo, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import {
  useGasPrice,
  useAccount,
  useWriteContract,
  useEstimateGas,
} from "wagmi";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { erc20Abi, parseGwei } from "viem";

export function useLeverageContract() {
  const account = useAccount();
  const [abi, setAbi] = useState();
  const gasPrice = useGasPrice();
  const result = useEstimateGas();
  const { wstETHvsUSDPrice } = useContractsData();
  const { writeContract, writeContractAsync, status, error, ...rest } =
    useWriteContract();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const contract = { address: ADDRESSES.wstETH, abi: erc20Abi };
  const leverageContract = { address: ADDRESSES.LEVERAGE_STRATEGY, abi };

  console.log("error", error);
  const stake = async (amount, { keeper = false }) => {
    if (!abi) {
      console.log("abi is not loaded");
      return;
    }
    console.log(
      "args...",
      amount,
      account?.address,
      BigNumber(amount).multipliedBy(wstETHvsUSDPrice).toFixed(0),
    );

    await writeContractAsync({
      ...contract,
      functionName: "approve",
      args: [ADDRESSES.LEVERAGE_STRATEGY, amount],
      gasPrice: BigNumber(gasPrice?.data).multipliedBy(1.5).toFixed(),
      gas: 97000,
      enabled: !!account?.address,
    });

    if (keeper) {
      return writeContract({
        ...leverageContract,
        functionName: "deposit",
        gas: 500000,
        gasPrice: BigNumber(gasPrice?.data).multipliedBy(1.5).toFixed(0),
        args: [amount, account?.address],
        enabled: !!account?.address,
      });
    } else {
      return writeContract({
        ...leverageContract,
        functionName: "depositAndInvest",
        gas: 500000,
        gasPrice: BigNumber(gasPrice?.data).multipliedBy(1.5).toFixed(0),
        args: [
          amount,
          account?.address,
          BigNumber(amount).multipliedBy(wstETHvsUSDPrice).toFixed(),
        ],
        enabled: !!account?.address,
      });
    }
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
      args: [amount, account?.address, account?.address, 0],
      enabled: !!account?.address,
    });
    // withdrawFn(amount, account, account, 0, {
    //   gasPrice,
    //   gasLimit: 970000,
    // });
  };

  return { stake, withdraw, status, error };
}
