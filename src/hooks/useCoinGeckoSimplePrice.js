import { useEffect, useState } from "react";
import { getSimplePrices } from "@/api/coingecko";
import { useAccount } from "wagmi";

export function useCoinGeckoSimplePrice() {
  const [price, setPrice] = useState();
  const account = useAccount();

  useEffect(() => {
    if (account && !price) {
      getSimplePrices().then((newPrice) => setPrice(newPrice));
    }
  }, [account, price]);

  return {
    wstETHvsUSDPrice: price?.["wrapped-steth"].usd,
    balancerVsUSDPrice: price?.["balancer"].usd,
    ethereumVsUSDPrice: price?.["ethereum"].usd,
  };
}
