import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useWstEthPrice } from "@/hooks/useWstEthPrice";
import { useCurrentBalance } from "@/hooks/useCurrentBalance";
import { formatEther } from "ethers/lib/utils";
import BigNumber from "bignumber.js";
import { useAPR } from "@/hooks/useAPR";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";
import { useCall, useEthers } from "@usedapp/core";
import { useCrvUSDController } from "@/hooks/useCrvUSDController";
import { useHealthStatus } from "@/hooks/useHealthStatus";

const ContractsDataContext = createContext(null);

export function useContractsData() {
  const context = useContext(ContractsDataContext);
  if (context == null) {
    throw new Error("ContractsDataContext Provider missing");
  }

  return context;
}

export function ContractsDataProvider({ children }) {
  const aprData = useAPR();
  const userState = useCrvUSDController();
  const strategyHealth = useHealthStatus();
  const { price: wstETHvsUSDPrice } = useWstEthPrice();
  const [balanceOf, totalSupply, currentDeposits] = useCurrentBalance();
  console.log("balanceOf", balanceOf);
  const wstEthBalance = balanceOf ? formatEther(balanceOf) : "";

  const [rewardRate, rewardTokenPriceContract] = aprData;
  console.log("APR Data", rewardRate, rewardTokenPriceContract);
  const summ =
    BigNumber(userState?.[0])
      .multipliedBy(wstETHvsUSDPrice)
      .plus(userState?.[1]) || null;

  return (
    <ContractsDataContext.Provider
      value={{
        strategyHealth,
        balanceOf,
        currentDeposits,
        summ,
        totalSupply,
        wstETHvsUSDPrice,
        wstEthBalance,
      }}
    >
      {children}
    </ContractsDataContext.Provider>
  );
}
