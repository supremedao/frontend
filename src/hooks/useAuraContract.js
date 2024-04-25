import { useEffect, useState } from "react";
import { useCalls, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { ADDRESSES } from "@/contracts/addresses";

export function useAuraContract() {
  const [auraAbi, setAuraAbi] = useState(false);
  const { account } = useEthers();

  useEffect(() => {
    if (!auraAbi) {
      Promise.all([import("@/contracts/abi/aura-abi.json")]).then(
        ([auraVaultAbiResponse]) => {
          setAuraAbi(auraVaultAbiResponse.default);
        },
      );
    }
  }, [auraAbi]);
  const contract = auraAbi && new Contract(ADDRESSES.AURA, auraAbi);
  const calls =
    auraAbi && account
      ? [
          {
            contract,
            method: "reductionPerCliff",
            args: [],
          },
          {
            contract,
            method: "maxSupply",
            args: [],
          },
          {
            contract,
            method: "totalSupply",
            args: [],
          },
          {
            contract,
            method: "totalCliffs",
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
  console.log("useAuraVault", results);
  return results.map((result) => result?.value?.[0]);
}
