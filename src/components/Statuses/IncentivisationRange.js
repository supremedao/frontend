import { useContractsData } from "@/Context/ContractsDataProvider";
import { useAPR } from "@/hooks/useAPR";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";
import StatusBar from "@/components/StatusBar";
import Typography from "@/components/Typography";

function IncentivisationRange() {
  const { balanceOf, summ, totalSupply, userState, wstETHvsUSDPrice } =
    useContractsData();
  const aprData = useAPR(1);
  const apr = aprData?.[0];
  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    summ,
    wstETHvsUSDPrice,
  });
  console.log("apr, amount: ", apr, amount);
  const value = BigNumber(amount).multipliedBy(apr);

  return (
    <StatusBar
      title={"Average Incentivisation Range"}
      hint={
        <div className={"max-w-72"}>
          <Typography>Average Incentivisation Range:</Typography>
          <Typography>
            This indicates the average percentage of funds we allocate for
            incintivation on Pladin or Hidden Hands.
          </Typography>
        </div>
      }
      value={`$ ${!value.isNaN() ? value.toFixed(2) : "N/A"}`}
    />
  );
}

export { IncentivisationRange };
