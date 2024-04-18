import { useEffect, useState } from "react";
import { useCalls, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

export function useAPR() {
  const [auraVaultAbi, setAuraVaultAbi] = useState(false);
  const { account } = useEthers();

  useEffect(() => {
    if (!auraVaultAbi) {
      Promise.all([import("@/contracts/abi/aura-vault-abi.json")]).then(
        ([auraVaultAbiResponse]) => {
          setAuraVaultAbi(auraVaultAbiResponse.default);
        },
      );
    }
  }, [auraVaultAbi]);

  const calls =
    auraVaultAbi && account
      ? [
          {
            contract: new Contract(ADDRESSES.AURA_VAULT, auraVaultAbi),
            method: "rewardRate",
            args: [],
          },
          {
            contract: new Contract(ADDRESSES.AURA_VAULT, auraVaultAbi),
            method: "rewardToken",
            args: [],
          },
        ]
      : [];
  const results = useCalls(calls) ?? [];
  results.forEach((result, idx) => {
    if (result && result.error) {
      console.error(
        `Error encountered calling 'totalSupply' on ${calls[idx]?.contract.address}: ${result.error.message}`,
      );
    }
  });
  console.log(results);
  return results.map((result) => result?.value?.[0]);
}
