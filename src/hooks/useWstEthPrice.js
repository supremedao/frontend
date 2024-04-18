import { useEffect, useState } from "react";
import { getSimplePrice } from "@/api/coingecko";
import { useEthers } from "@usedapp/core";

export function useWstEthPrice() {
  const [price, setPrice] = useState();
  const { account } = useEthers();

  useEffect(() => {
    if (account) {
      getSimplePrice().then((newPrice) => setPrice(newPrice));
    }
  }, [account]);

  return { price: price?.["wrapped-steth"].usd };
}
