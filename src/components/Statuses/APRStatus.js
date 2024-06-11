"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useAPR } from "@/hooks/useAPR";
import Typography from "@/components/Typography";

function APRStatus(props) {
  const aprData = useAPR(1);
  const apr = aprData?.[0];

  const maxAprValue = BigNumber(apr).multipliedBy(2.5);
  const formattedValue = BigNumber(apr);

  return (
    <StatusBar
      title={"APR"}
      hint={
        <div className={"max-w-72"}>
          <Typography>APR (Annual Percentage Rate):</Typography>
          <Typography>
            The APR indicates the annual return on your investment, expressed as
            a percentage. It shows the potential earnings you can expect over a
            year based on the current performance of the investment strategy.
          </Typography>
        </div>
      }
      value={`${formattedValue?.toFixed(2)} — ${maxAprValue?.toFixed(2)} %`}
      {...props}
    />
  );
}

export default APRStatus;
