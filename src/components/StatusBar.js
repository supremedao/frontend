"use client";
import Typography from "@/components/Typography";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { Tooltip } from "react-tooltip";
import { useMemo } from "react";

function StatusBar({ hint = "", title = "", value = 0, className = "" }) {
  const tooltipID = useMemo(() => `tooltip-${uuidv4()}`, []);
  return (
    <div className={`grow rounded-md border bg-black/5 p-4  ${className}`}>
      <header className={"mb-2 flex flex-row justify-between"}>
        <Typography variant={"lead"} className={"font-light text-primary"}>
          {title}
        </Typography>
        <div className="tooltipContainer ml-4">
          <span id={tooltipID}>
            <InformationCircleIcon className={"size-6"} />
          </span>
          <Tooltip anchorSelect={`#${tooltipID}`}>{hint}</Tooltip>
        </div>
      </header>

      <Typography variant={"h3"} className={`font-normal`}>
        {value}
      </Typography>
    </div>
  );
}

export default StatusBar;
