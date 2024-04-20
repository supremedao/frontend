import Typography from "@/components/Typography";
import { LinearChart } from "@/components/LinearChart";
import { useState } from "react";

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

export default function Chart() {
  const [range, setRange] = useState(7);

  return (
    <article className={"rounded-md border bg-black/5 p-4"}>
      <div className="-mx-4 mb-2 flex grow flex-row items-center justify-between border-b px-4 pb-4">
        <Typography variant={"h3"} className={"mb-0"}>
          Historical APR
        </Typography>
        <header
          className={
            "grid grid-cols-3 gap-2 rounded-lg bg-black/5 p-1 text-center"
          }
        >
          <DayPicker active={range === 7} onClick={() => setRange(7)}>
            7d
          </DayPicker>
          <DayPicker onClick={() => setRange(30)} active={range === 30}>
            30d
          </DayPicker>
          <DayPicker onClick={() => setRange(365)} active={range === 365}>
            1y
          </DayPicker>
        </header>
      </div>
      <LinearChart />
    </article>
  );
}
