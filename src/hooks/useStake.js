import { useEffect, useMemo, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import {
  useGasPrice,
  useAccount,
  useWriteContract,
  useEstimateGas,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { erc20Abi } from "viem";

export function useStake() {
  const account = useAccount();
  const [abi, setAbi] = useState();
  const gasPrice = useGasPrice();
  const { wstETHvsUSDPrice } = useContractsData();

  const { data: approvedAmount } = useReadContract({
    address: ADDRESSES.wstETH,
    abi: erc20Abi,
    functionName: "allowance",
    args: [account?.address, ADDRESSES.LEVERAGE_STRATEGY],
  });

  const {
    data: hash,
    writeContract,
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

  const leverageContract = { address: ADDRESSES.LEVERAGE_STRATEGY, abi };

  const formattedGasPrice = BigNumber(gasPrice?.data)
    .multipliedBy(1.2)
    .toFixed(0);

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const stake = async (amount, { keeper = false }) => {
    if (!abi) {
      return Promise.reject("abi is not loaded");
    }

    console.log("approved:", approvedAmount);

    return new Promise((resolve, reject) => {
      if (BigNumber(approvedAmount).gte(amount)) {
        if (keeper) {
          return writeContractAsync(
            {
              ...leverageContract,
              functionName: "deposit",
              onSuccess: () => {
                resolve();
              },
              onError: (error) => {
                reject(error);
              },
              gasPrice: formattedGasPrice,
              args: [amount, account?.address],
              enabled: !!account?.address,
            },
            {
              onSuccess: () => {
                resolve();
              },
              onError: (error) => {
                reject(error);
              },
            },
          );
        } else {
          return writeContractAsync(
            {
              ...leverageContract,
              functionName: "depositAndInvest",
              // gasPrice: formattedGasPrice,
              maxFeePerGas: estimationData?.maxFeePerGas,
              args: [
                amount,
                account?.address,
                BigNumber(amount).multipliedBy(wstETHvsUSDPrice).toFixed(),
              ],
              enabled: !!account?.address,
            },
            {
              onSuccess: () => {
                resolve();
              },
              onError: (error) => {
                reject(error);
              },
            },
          );
        }
      } else {
        return writeContractAsync(
          {
            address: ADDRESSES.wstETH,
            abi: erc20Abi,
            functionName: "approve",
            args: [ADDRESSES.LEVERAGE_STRATEGY, amount],
            gas: 97000,
            gasPrice: formattedGasPrice,
            enabled: !!account?.address,
          },
          {
            onError: (error) => {
              reject();
            },
            onSuccess: () => {
              if (keeper) {
                return writeContractAsync(
                  {
                    ...leverageContract,
                    functionName: "deposit",
                    onSuccess: () => {
                      resolve();
                    },
                    onError: (error) => {
                      reject(error);
                    },
                    gasPrice: formattedGasPrice,
                    args: [amount, account?.address],
                    enabled: !!account?.address,
                  },
                  {
                    onSuccess: () => {
                      resolve();
                    },
                    onError: (error) => {
                      reject(error);
                    },
                  },
                );
              } else {
                return writeContractAsync(
                  {
                    ...leverageContract,
                    functionName: "depositAndInvest",
                    // gasPrice: formattedGasPrice,
                    maxFeePerGas: estimationData?.maxFeePerGas,
                    args: [
                      amount,
                      account?.address,
                      BigNumber(amount)
                        .multipliedBy(wstETHvsUSDPrice)
                        .toFixed(),
                    ],
                    enabled: !!account?.address,
                  },
                  {
                    onSuccess: () => {
                      resolve();
                    },
                    onError: (error) => {
                      reject(error);
                    },
                  },
                );
              }
            },
          },
        );
      }
    });
  };

  console.log("error", error);

  return {
    stake,
    status,
    error,
    isPending,
    isConfirming,
    isConfirmed,
  };
}
