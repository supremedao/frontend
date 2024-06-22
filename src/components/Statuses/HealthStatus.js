"use client";
import StatusBar from "@/components/StatusBar";
import BigNumber from "bignumber.js";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { formatEther } from "viem";
import { useHealthStatus } from "@/hooks/useHealthStatus";
import Typography from "@/components/Typography";

const POSITIVE_THRESHOLD = 25;
const AVERAGE_THRESHOLD = 15;

const THRESHOLD = {
  NEGATIVE: "NEGATIVE",
  AVERAGE: "AVERAGE",
  POSITIVE: "POSITIVE",
};
const COLORS = {
  [THRESHOLD.NEGATIVE]: { BG: "bg-red-400", TEXT: "text-red-400" },
  [THRESHOLD.AVERAGE]: { BG: "bg-yellow-400", TEXT: "text-yellow-400" },
  [THRESHOLD.POSITIVE]: { BG: "bg-green-400", TEXT: "text-green-400" },
};

function getStatus(value) {
  if (value < AVERAGE_THRESHOLD) {
    return THRESHOLD.NEGATIVE;
  } else if (value >= AVERAGE_THRESHOLD && value < POSITIVE_THRESHOLD) {
    return THRESHOLD.AVERAGE;
  } else if (value >= POSITIVE_THRESHOLD) {
    return THRESHOLD.POSITIVE;
  }
}

function HealthStatus(props) {
  const strategyHealth = useHealthStatus();
  const formattedHealth = strategyHealth;
  const strategyHealthValue = BigNumber(formattedHealth).isNaN()
    ? ""
    : formattedHealth;

  console.log(`======= Strategy Health =======
    strategyHealth=${strategyHealth}
    strategyHealthValue=${strategyHealthValue}
  `);

  const status = getStatus(strategyHealthValue);

  return (
    <StatusBar
      title={"Status"}
      hint={
        <div className={"max-w-72"}>
          <Typography>Status:</Typography>
          <Typography>
            The status shows the current state of our loan on Curve of this
            strategy.
          </Typography>
        </div>
      }
      value={
        strategyHealthValue !== "" ? (
          <span className={"align-center flex items-center"}>
            <span
              className={COLORS[status].TEXT}
            >{`${strategyHealthValue}% `}</span>
            <span className="relative ml-2 flex size-3">
              <span
                className={`absolute inline-flex size-full animate-ping rounded-full opacity-75 ${COLORS[status].BG}`}
              ></span>
            </span>
          </span>
        ) : (
          "N/A"
        )
      }
      {...props}
    />
  );
}

export default HealthStatus;
