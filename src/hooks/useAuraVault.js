import { useEffect, useState } from "react";
import { ADDRESSES } from "@/contracts/addresses";
import { useAccount, useReadContracts } from "wagmi";

export function useAuraVault() {
  const [auraVaultAbi, setAuraVaultAbi] = useState(false);
  const account = useAccount();

  useEffect(() => {
    if (!auraVaultAbi) {
      Promise.all([import("@/contracts/abi/aura-vault-abi.json")]).then(
        ([auraVaultAbiResponse]) => {
          setAuraVaultAbi(auraVaultAbiResponse.default);
        },
      );
    }
  }, [auraVaultAbi]);

  const contract = { address: ADDRESSES.AURA_VAULT, abi: auraVaultAbi };

  const { data, error } = useReadContracts({
    contracts: [
      {
        ...contract,
        functionName: "rewardRate",
        args: [],
        enabled: !!account,
      },
      {
        ...contract,
        functionName: "rewardToken",
        args: [],
        enabled: !!account,
      },
    ],
  });

  if (error) {
    console.error(
      `[useAuraVault] Error encountered calling on ${contract.address}: ${error}`,
    );
  }
  console.log("useAuraVault", data);
  return data?.map((value) => value.result) || [];
}
