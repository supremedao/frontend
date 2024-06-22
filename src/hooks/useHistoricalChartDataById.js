import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getHistoricalChartDataById } from "@/api/coingecko";

export function useHistoricalChartDataById(days) {
  const [balancerPrices, setBalancerPrices] = useState();
  const [auraPrices, setAuraPrices] = useState();
  const account = useAccount();

  useEffect(() => {
    getHistoricalChartDataById("balancer", days).then((data) =>
      setBalancerPrices(data?.prices),
    );
  }, [balancerPrices, days]);

  useEffect(() => {
    getHistoricalChartDataById("aura", days).then((data) =>
      setAuraPrices(data?.prices),
    );
  }, [auraPrices, days]);

  return { balancerPrices, auraPrices };
}
