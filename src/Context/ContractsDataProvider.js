import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useCoinGeckoSimplePrice } from "@/hooks/useCoinGeckoSimplePrice";
import { useLeverageStrategyRead } from "@/hooks/useLeverageStrategyRead";
import { formatEther } from "ethers/lib/utils";
import BigNumber from "bignumber.js";
import { useAuraVault } from "@/hooks/useAuraVault";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";
import { useCall, useEthers } from "@usedapp/core";
import { useCrvUSDController } from "@/hooks/useCrvUSDController";
import { useHealthStatus } from "@/hooks/useHealthStatus";
import { useAuraContract } from "@/hooks/useAuraContract";

const ContractsDataContext = createContext(null);

export function useContractsData() {
  const context = useContext(ContractsDataContext);
  if (context == null) {
    throw new Error("ContractsDataContext Provider missing");
  }

  return context;
}

export function ContractsDataProvider({ children }) {
  const auraVaultData = useAuraVault();
  const auraData = useAuraContract();
  const [userState, debt] = useCrvUSDController();
  const strategyHealth = useHealthStatus();
  const { wstETHvsUSDPrice, balancerVsUSDPrice } = useCoinGeckoSimplePrice();
  const [balanceOf, totalSupply, currentDeposits, fee] =
    useLeverageStrategyRead();
  const wstEthBalance = balanceOf ? formatEther(balanceOf) : "";

  const summ =
    BigNumber(userState?.[0])
      .multipliedBy(wstETHvsUSDPrice)
      .plus(userState?.[1]) || null;

  return (
    <ContractsDataContext.Provider
      value={{
        auraData,
        auraVaultData,
        debt,
        balancerVsUSDPrice,
        strategyHealth,
        balanceOf,
        currentDeposits,
        summ,
        fee,
        totalSupply,
        wstETHvsUSDPrice,
        wstEthBalance,
      }}
    >
      {children}
    </ContractsDataContext.Provider>
  );
}
