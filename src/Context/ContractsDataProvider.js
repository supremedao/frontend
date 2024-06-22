import { createContext, useContext } from "react";
import { useCoinGeckoSimplePrice } from "@/hooks/useCoinGeckoSimplePrice";
import { useReadLeverageStrategy } from "@/hooks/useReadLeverageStrategy";
import BigNumber from "bignumber.js";
import { useAuraVault } from "@/hooks/useAuraVault";
import { useCrvUSDController } from "@/hooks/useCrvUSDController";
import { useHealthStatus } from "@/hooks/useHealthStatus";
import { useAuraContract } from "@/hooks/useAuraContract";
import { formatEther } from "viem";

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
  const [userState, debt, user_prices, liqDiscount] = useCrvUSDController();

  const { wstETHvsUSDPrice, ethereumVsUSDPrice, balancerVsUSDPrice } =
    useCoinGeckoSimplePrice();
  const [balanceOf, totalSupply, currentDeposits, fee] =
    useReadLeverageStrategy();
  const wstEthBalance = formatEther(balanceOf || 0);
  const currentDepositsInUSD = BigNumber(
    formatEther(currentDeposits || ""),
  ).multipliedBy(wstETHvsUSDPrice);
  const userStateInUSD = BigNumber(
    formatEther(userState?.[0] || ""),
  ).multipliedBy(wstETHvsUSDPrice);
  const loss = currentDepositsInUSD.minus(userStateInUSD);
  const lossPercentage = loss.div(currentDepositsInUSD);
  const summ = BigNumber(userState?.[0])
    .multipliedBy(wstETHvsUSDPrice)
    .plus(userState?.[1])
    .toFixed(0);

  return (
    <ContractsDataContext.Provider
      value={{
        loss,
        userState,
        lossPercentage,
        auraData,
        auraVaultData,
        ethereumVsUSDPrice,
        debt,
        balancerVsUSDPrice,
        balanceOf,
        currentDeposits,
        user_prices,
        fee,
        totalSupply,
        wstETHvsUSDPrice,
        wstEthBalance,
        summ,
        liqDiscount: BigNumber(liqDiscount).div(Math.pow(10, 18)),
      }}
    >
      {children}
    </ContractsDataContext.Provider>
  );
}
