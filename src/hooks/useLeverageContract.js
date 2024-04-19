import { useEffect, useMemo, useState } from "react";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";
import { useContractFunction, useEthers, useGasPrice } from "@usedapp/core";

export function useLeverageContract() {
  const { account } = useEthers();
  const [abi, setAbi] = useState();
  const gasPrice = useGasPrice();

  useEffect(() => {
    import("@/contracts/abi/leverage-strategy.json").then((resp) => {
      setAbi(resp.default);
    });
  }, []);

  const contract = useMemo(
    () => abi && new Contract(ADDRESSES.LEVERAGE_STRATEGY, abi),
    [abi],
  );

  const { state: stakeState, send: stakeFn } = useContractFunction(
    contract,
    "depositAndInvest",
    { transactionName: "Stake", gasLimitBufferPercentage: 10 },
  );
  const { state: withdrawState, send: withdrawFn } = useContractFunction(
    contract,
    "redeemWstEth",
    { transactionName: "Withdraw" },
  );

  const stake = (amount) => {
    stakeFn(amount, account, 0, {
      gasPrice,
      gasLimit: 970000,
    });
  };
  const withdraw = (amount) => {
    withdrawFn(amount, account, account, 0, {
      gasPrice,
      gasLimit: 970000,
    });
  };

  return { stake, withdraw, stakeState, withdrawState };
}
