import { createContext, useContext } from "react";
import { useCoinGeckoSimplePrice } from "@/hooks/useCoinGeckoSimplePrice";
import { useLeverageStrategyRead } from "@/hooks/useLeverageStrategyRead";
import BigNumber from "bignumber.js";
import { useAuraVault } from "@/hooks/useAuraVault";
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
  const wstEthBalance = balanceOf ? balanceOf : "";

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
