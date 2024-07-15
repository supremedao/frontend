"use client";
import Typography from "@/components/Typography";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import HealthStatus from "@/components/Statuses/HealthStatus";
import { LiquidationRange } from "@/components/Statuses/LiquidationRange";
import { IncentivisationRange } from "@/components/Statuses/IncentivisationRange";

function AdvancedInformation() {
  const [collapsed, toggle] = useState(true);

  return (
    <article className={"mb-20"}>
      <header className={"flex items-start justify-between"}>
        <Typography variant={"h2"}>Advanced Information</Typography>
        <button
          onClick={() => toggle(!collapsed)}
          className={
            "mt-4 inline-block rounded-full border p-2  transition-all"
          }
        >
          {!collapsed && <ChevronDownIcon className={"size-6 "} />}
          {collapsed && <ChevronUpIcon className={"size-6"} />}
        </button>
      </header>
      <div
        className={`${collapsed ? "h-0 opacity-0 delay-0 duration-0" : "h-full opacity-100 duration-500"} transition-opacity ease-in-out`}
      >
        {/*<div className={"mb-4 grid gap-4 sm:grid-cols-2"}>*/}
        {/*<HealthStatus />*/}
        {/*<IncentivisationRange />*/}
        {/*</div>*/}
        <LiquidationRange />
      </div>
    </article>
  );
}

export default AdvancedInformation;
