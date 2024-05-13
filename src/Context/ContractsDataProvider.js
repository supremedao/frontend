import { createContext, useContext } from "react";
import { useCoinGeckoSimplePrice } from "@/hooks/useCoinGeckoSimplePrice";
import { useReadLeverageStrategy } from "@/hooks/useReadLeverageStrategy";
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
  const [userState, debt, user_prices, user_state_deposited] =
    useCrvUSDController();

  const { wstETHvsUSDPrice, ethereumVsUSDPrice, balancerVsUSDPrice } =
    useCoinGeckoSimplePrice();
  const [balanceOf, totalSupply, currentDeposits, fee] =
    useReadLeverageStrategy();
  const wstEthBalance = balanceOf ? balanceOf : 0;
  console.log("currentDeposits", currentDeposits, "user_state", userState?.[0]);
  const currentDepositsInUSD = BigNumber(currentDeposits || 0)
    .div(Math.pow(10, 18))
    .multipliedBy(wstETHvsUSDPrice);
  const userStateInUSD = BigNumber(userState?.[0] || 0)
    .div(Math.pow(10, 18))
    .multipliedBy(wstETHvsUSDPrice);
  const loss = currentDepositsInUSD.minus(userStateInUSD);
  const lossPercentage = loss.div(currentDepositsInUSD);
  console.log(wstETHvsUSDPrice, currentDepositsInUSD, loss, lossPercentage);

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
        user_state_deposited,
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
