import Typography from "@/components/Typography";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useContractsData } from "@/Context/ContractsDataProvider";
import BigNumber from "bignumber.js";
import { formatEther } from "viem";
import { useState } from "react";
import { convertEthToUsd } from "@/helpers";
import { LinearChart } from "@/components/LinearChart";

import { Tooltip } from "react-tooltip";

function useLiquidationRange() {
  const [value, setValue] = useState(0);

  return value;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 1,
    },
  },
  // interaction: {
  //   intersect: false,
  //   axis: "x",
  // },
  scales: {
    y: {
      min: 0,
      position: "none",
      ticks: {
        stepSize: 20,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function LiquidationRange({ className = "" }) {
  const {
    debt,
    loss,
    lossPercentage,
    user_prices,
    userState,
    ethereumVsUSDPrice,
  } = useContractsData();
  const formattedDebt = formatEther(debt || "", "wei");
  const deposited = convertEthToUsd(
    userState?.[0],
    ethereumVsUSDPrice,
  )?.toFixed(2);
  const maxRange = BigNumber(formatEther(user_prices?.[0] || ""));
  const minRange = BigNumber(formatEther(user_prices?.[1] || ""));

  console.log(`======== Liquidation Range ======
    user_state[0]=${userState?.[0]}
    user_prices=${user_prices}
    formatted debt=${formattedDebt}
    deposited=${deposited}
    loss=${loss?.toFixed(2)}
    loss % =${lossPercentage?.toFixed(2)}
  `);

  const data = {
    labels: [
      0,
      minRange.minus(100).toFixed(0),
      minRange.toFixed(0),
      maxRange.toFixed(0),
      maxRange.plus(100).toFixed(0),
      maxRange.plus(200).toFixed(0),
    ],
    datasets: [
      {
        label: "APR",
        data: [
          // { x: 0, y: 0 },
          { x: minRange.toFixed(0), y: 0 },
          { x: minRange.toFixed(0), y: 20 },
          { x: maxRange.toFixed(0), y: 20 },
          { x: maxRange.toFixed(0), y: 0 },
          // { x: maxRange.plus(200), y: 0 },
        ],
        lineTension: 0.5,
        fill: true,
        stepped: true,
        backgroundColor: ({ chart: { ctx } }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(92, 169, 252, 0.4)");
          gradient.addColorStop(1, "rgba(92, 169, 252, 0)");
          return gradient;
        },
        borderColor: "#254CF7",
      },
    ],
  };

  return (
    <div
      className={`relative grow rounded-md border bg-black/5 p-4 ${className}`}
    >
      <div className="tooltipContainer absolute right-4 top-4">
        <InformationCircleIcon
          id={"liquidation-tooltip"}
          className={"size-6"}
        />
        <Tooltip anchorSelect={"#liquidation-tooltip"} place={"bottom"}>
          <div className={"max-w-72"}>
            <Typography>Liquidation Range:</Typography>
            <Typography>
              This parameter indicates the range within which our collateralized
              position may be liquidated if the value of our assets drops below
              a certain threshold. It is crucial for managing the risks
              associated with leveraged investments.
            </Typography>
          </div>
        </Tooltip>
      </div>
      <article className={"flex flex-col sm:flex-row"}>
        <div className={"mb-4 sm:mb-0 sm:w-1/3"}>
          <header className={"mb-2"}>
            <Typography variant={"lead"} className={"font-light text-primary"}>
              Liquidation Range
            </Typography>
          </header>
          <Typography variant={"h3"} className={`font-normal`}>
            $ {minRange.toFixed(2)} — {maxRange.toFixed(2)}
          </Typography>
        </div>
        <div className={"flex flex-wrap gap-12 sm:w-2/3"}>
          <div>
            <Typography className={"mb-4 font-light"}>
              Current Balance
            </Typography>
            <Typography>$ {BigNumber(formattedDebt).toFixed(2)}</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>Deposited</Typography>
            <Typography>$ {deposited}</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>Loss Amount</Typography>
            <Typography>$ {loss?.toFixed(2) || 0}</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>% Loss</Typography>
            <Typography>
              {lossPercentage ? lossPercentage.toFixed(2) : 0}
            </Typography>
          </div>
        </div>
      </article>
      <article>
        <div className={"h-20"}>
          <LinearChart options={options} data={data} />
        </div>
      </article>
    </div>
  );
}
