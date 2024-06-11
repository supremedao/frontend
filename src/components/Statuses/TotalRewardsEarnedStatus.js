"use client";
import StatusBar from "@/components/StatusBar";
import { formatEther } from "viem";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import Typography from "@/components/Typography";

// Total Rewards earned
// Get user shares by calling balanceOf in LeverageStrategy and total shares by calling totalSupply()
// Get the summ from current balance
// calculate rew = summ - currentDeposits()
// return balanceOf/totalSupply * rew for specific person
function useTotalRewards() {
  const {
    balanceOf,
    totalSupply,
    userState,
    wstEthBalance,
    currentDeposits,
    wstETHvsUSDPrice,
    summ,
  } = useContractsData();

  const rew = BigNumber(summ).minus(
    BigNumber(currentDeposits).multipliedBy(wstETHvsUSDPrice),
  );
  const amount = BigNumber(balanceOf).div(totalSupply).multipliedBy(rew);
  console.log(`====== Total Rewards Earned ======
    balanceOf=${balanceOf}
    wstEthBalance=${wstEthBalance}
    totalSupply=${totalSupply}
    currentDeposits=${currentDeposits}
    formattedCurrentDeposits=${formatEther(currentDeposits || "")}
    wstETHvsUSDPrice=${wstETHvsUSDPrice}
    userState[0]=${userState?.[0]}
    userState[1]=${userState?.[1]}
    summ=${summ}, 
    rew=${rew}
    amount=${amount}
  `);

  return !amount.isNaN() ? formatEther(amount) : 0;
}

function TotalRewardsEarnedStatus(props) {
  const { wstETHvsUSDPrice } = useContractsData();
  const amount = useTotalRewards();

  return (
    <StatusBar
      title={"Total Rewards Earned"}
      hint={
        <div className={"max-w-72"}>
          <Typography>Total Rewards Earned:</Typography>
          <Typography>
            This parameter displays the total amount of rewards or earnings you
            have accumulated from your investments in SupremeDAO&apos;s
            strategies. It reflects the performance of your investments over
            time.
          </Typography>
        </div>
      }
      value={`${BigNumber(amount).div(wstETHvsUSDPrice).toFixed(3)} wstETH / ${amount} USD`}
      {...props}
    />
  );
}

export default TotalRewardsEarnedStatus;
