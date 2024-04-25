import { useEffect, useState } from "react";
import { getSimplePrice } from "@/api/coingecko";
import { useEthers } from "@usedapp/core";

export function useCoinGeckoSimplePrice() {
  const [price, setPrice] = useState();
  const { account } = useEthers();

  useEffect(() => {
    if (account) {
      getSimplePrice().then((newPrice) => setPrice(newPrice));
    }
  }, [account]);

  return {
    wstETHvsUSDPrice: price?.["wrapped-steth"].usd,
    balancerVsUSDPrice: price?.["balancer"].usd,
  };
}
