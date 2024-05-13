"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useAPR } from "@/hooks/useAPR";

function APRStatus(props) {
  const aprData = useAPR(1);
  const apr = aprData?.[0];

  const maxAprValue = BigNumber(apr).multipliedBy(2.5);
  const formattedValue = BigNumber(apr);

  return (
    <StatusBar
      title={"APR"}
      value={`${formattedValue?.toFixed(2)} — ${maxAprValue?.toFixed(2)} %`}
      {...props}
    />
  );
}

export default APRStatus;
