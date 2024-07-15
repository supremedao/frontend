import { useHistoricalChartDataById } from "@/hooks/useHistoricalChartDataById";
import { calculateAuraAPR, generateTimestamps } from "@/helpers";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { useQuery } from "@apollo/client";
import { GET_POOL_TVLs } from "@/api/graphql/queries";
import BigNumber from "bignumber.js";

function useAPR(days) {
  const timestamps = generateTimestamps(days);
  const { balancerPrices, auraPrices } = useHistoricalChartDataById(days);
  const { fee, auraData, auraVaultData } = useContractsData();
  const { data: tvlData, error } = useQuery(GET_POOL_TVLs, {
    variables: {
      days,
      id: "0x42fbd9f666aacc0026ca1b88c94259519e03dd67000200000000000000000507",
    },
  });

  console.log(`------- useAPR -----
     fee: ${fee}
     auraData: ${auraData}
     tvlData: ${tvlData}
     balancerPrices: ${balancerPrices}
  `);

  if (!fee || !auraData || !tvlData || !balancerPrices) return [];

  const formattedTvlData = [...(tvlData?.poolSnapshots || [])].map((item) => {
    const date = new Date(item.timestamp * 1000);
    date.setHours(0, 0, 0, 0);
    return { ...item, timestamp: +date };
  });

  const formattedAuraPrices = [...(auraPrices || [])]
    .sort((a, b) => b[0] - a[0])
    .map((item) => {
      const date = new Date(item[0]);
      date.setHours(0, 0, 0, 0);
      return [date.getTime(), item[1]];
    });

  const formattedBalancerPrices = [...(balancerPrices || [])]
    .sort((a, b) => b[0] - a[0])
    .map((item) => {
      const date = new Date(item[0]);
      date.setHours(0, 0, 0, 0);
      return [date.getTime(), item[1]];
    });

  const formattedFee = BigNumber(fee).div(Math.pow(10, 12));

  const auraAprData = timestamps.map((timestamp) => {
    const lastAuraPrice = formattedAuraPrices[formattedAuraPrices.length - 1];
    const lastBalancerPrice =
      formattedBalancerPrices[formattedBalancerPrices.length - 1];
    const auraPriceEntry =
      formattedAuraPrices?.find(([ts]) => ts <= timestamp) || lastAuraPrice;
    const balancerPriceEntry =
      formattedBalancerPrices?.find(([ts]) => ts <= timestamp) ||
      lastBalancerPrice;

    const auraPrice = auraPriceEntry ? auraPriceEntry[1] : 0; // Use 0 if no data for the date
    const balancerPrice = balancerPriceEntry ? balancerPriceEntry[1] : 0; // Use 0 if no data for the date
    const tvl = formattedTvlData.find((item) => item.timestamp <= timestamp);

    const auraAPR = calculateAuraAPR({
      balancerPrice,
      auraData,
      auraVaultData,
      auraPrice,
      tvl: tvl?.liquidity,
      fee: formattedFee,
    });

    return auraAPR?.toFixed(5); // Fixed to 2 decimal places
  });

  console.log(`----- auraAprData ----
    ${auraAprData}
  `);

  return auraAprData;
}

export { useAPR };
