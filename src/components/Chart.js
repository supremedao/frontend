import Typography from "@/components/Typography";
import { LinearChart } from "@/components/LinearChart";
import { useState } from "react";
import { generateTimestamps } from "@/helpers";
import { useAPR } from "@/hooks/useAPR";

function DayPicker({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-lg ${active ? "bg-white" : "text-gray-600"} px-3 py-2 transition-colors ease-in-out`}
    >
      {children}
    </button>
  );
}

const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: 0,
      position: "right",
      ticks: {
        // stepSize: 1,
        callback: function (value, index, values) {
          return value + " %";
        },
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

export default function Chart() {
  const [days, setDays] = useState(7);
  const timestamps = generateTimestamps(days);
  const auraAprData = useAPR(days);

  const data = {
    labels: timestamps.reverse().map((timestamp) => {
      const date = new Date(timestamp);
      return `${date.getDate()} ${date.toLocaleDateString("en-US", {
        month: "short",
      })}`;
    }),
    datasets: [
      {
        label: "APR",
        data: auraAprData.reverse(),
        lineTension: 0.5,
        fill: true,
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
    <article className={"rounded-md border bg-black/5 p-4"}>
      <div className="-mx-4 mb-2 flex grow flex-row items-center justify-between border-b px-4 pb-4">
        <Typography variant={"h3"} className={"mb-0"}>
          Historical APR
        </Typography>
        <header
          className={
            "grid grid-cols-2 gap-2 rounded-lg bg-black/5 p-1 text-center"
          }
        >
          <DayPicker active={days === 7} onClick={() => setDays(7)}>
            7d
          </DayPicker>
          <DayPicker onClick={() => setDays(30)} active={days === 30}>
            30d
          </DayPicker>
        </header>
      </div>
      <LinearChart options={options} data={data} />
    </article>
  );
}
