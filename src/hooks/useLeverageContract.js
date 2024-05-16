import { useEffect, useMemo, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useGasPrice, useAccount, useWriteContract } from "wagmi";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";

export function useLeverageContract() {
  const account = useAccount();
  const [abi, setAbi] = useState();
  const gasPrice = useGasPrice();
  const { wstETHvsUSDPrice } = useContractsData();
  const { writeContract, status, error, ...rest } = useWriteContract();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const contract = { address: ADDRESSES.wstETH };
  const leverageContract = { address: ADDRESSES.LEVERAGE_STRATEGY, abi };

  const stake = (amount, { keeper = false }) => {
    if (!abi) {
      console.log("abi is not loaded");
      return;
    }

    writeContract(
      {
        ...contract,
        functionName: "approve",
        args: [ADDRESSES.LEVERAGE_STRATEGY, amount],
        enabled: !!account?.address,
      },
      {
        onSuccess: () => {
          if (keeper) {
            return writeContract({
              ...leverageContract,
              functionName: "deposit",
              args: [amount, account?.address],
              enabled: !!account?.address,
            });
          } else {
            return writeContract({
              ...leverageContract,
              functionName: "depositAndInvest",
              args: [
                amount,
                account?.address,
                BigNumber(amount).multipliedBy(wstETHvsUSDPrice).toFixed(),
                // {
                //   gasPrice,
                //   gasLimit: 970000,
                // },
              ],
              enabled: !!account?.address,
            });
          }
        },
      },
    );

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
