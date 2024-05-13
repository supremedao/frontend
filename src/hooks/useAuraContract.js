import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContracts } from "wagmi";

export function useAuraContract() {
  const [auraAbi, setAuraAbi] = useState(false);
  const account = useAccount();

  useEffect(() => {
    if (!auraAbi) {
      Promise.all([import("@/contracts/abi/aura-abi.json")]).then(
        ([auraVaultAbiResponse]) => {
          setAuraAbi(auraVaultAbiResponse.default);
        },
      );
    }
  }, [auraAbi]);
  const contract = { address: ADDRESSES.AURA, abi: auraAbi };
  const contracts = [
    {
      ...contract,
      functionName: "reductionPerCliff",
      args: [],
      enabled: !!account?.address,
    },
    {
      ...contract,
      functionName: "EMISSIONS_MAX_SUPPLY",
      args: [],
      enabled: !!account?.address,
    },
    {
      ...contract,
      functionName: "totalSupply",
      args: [],
      enabled: !!account?.address,
    },
    {
      ...contract,
      functionName: "totalCliffs",
      args: [],
      enabled: !!account?.address,
    },
  ];
  const { data, error } = useReadContracts({ contracts });

  if (error) {
    console.error(
      `[useAuraContract] Error encountered calling on ${contract.address}: ${error}`,
    );
  }
  console.log("useAuraContract", data);
  return data?.map((value) => value.result) || [];
}
