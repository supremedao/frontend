import { useContractsData } from "@/Context/ContractsDataProvider";
import { useAPR } from "@/hooks/useAPR";
import { calculateWstEthBalanceInUSD } from "@/helpers";
import BigNumber from "bignumber.js";
import StatusBar from "@/components/StatusBar";

function IncentivisationRange() {
  const { balanceOf, totalSupply, userState, wstETHvsUSDPrice } =
    useContractsData();
  const aprData = useAPR(1);
  const apr = aprData?.[0];
  const amount = calculateWstEthBalanceInUSD({
    balanceOf,
    totalSupply,
    userState,
    wstETHvsUSDPrice,
  });
  console.log("apr, amount: ", apr, amount);
  const value = BigNumber(amount).multipliedBy(apr);

  return (
    <StatusBar
      title={"Average Incentivisation Range"}
      value={`$ ${!value.isNaN() ? value.toFixed(2) : "N/A"}`}
    />
  );
}

export { IncentivisationRange };
