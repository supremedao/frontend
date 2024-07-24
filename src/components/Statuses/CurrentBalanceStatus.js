"use client";
import StatusBar from "@/components/StatusBar";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";
import { useCurrentWSTBalance } from "@/hooks/useCurrentWSTBalance";
import Typography from "@/components/Typography";

function CurrentBalanceStatus({ keeperAmount = 0, ...props }) {
  const { balanceOf, summ, totalSupply, userState, wstETHvsUSDPrice } =
    useContractsData();
  const currentBalance = useCurrentWSTBalance();

  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    summ,
    wstETHvsUSDPrice,
  });

  return (
    <StatusBar
      title={"Your current Balance"}
      hint={
        <div className={"max-w-72"}>
          <Typography>Your Current Balance:</Typography>
          <Typography>
            This is the amount of your deposited assets currently held in the
            vault. It shows the total value of your investments within
            SupremeDAO.
          </Typography>
        </div>
      }
      value={`${currentBalance} wstETH / ${amount} USD`}
      comment={keeperAmount ? `Pending Keeper Execution: ${keeperAmount} wstETH`: ''}
      {...props}
    />
  );
}

export default CurrentBalanceStatus;
