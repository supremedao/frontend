"use client";
import Typography from "@/components/Typography";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

function StatusBar({
  hint = "Your transaction will revert if the price changes unfavourably by more than this percentage",
  title = "",
  value = 0,
  className = "",
}) {
  return (
    <div className={`grow rounded-md border bg-black/5 p-4  ${className}`}>
      <header className={"mb-2 flex flex-row justify-between"}>
        <Typography variant={"lead"} className={"font-light text-primary"}>
          {title}
        </Typography>
        <div className="tooltipContainer ml-4">
          <DynamicTooltip label={hint} position={"bottom"} size={"small"}>
            <InformationCircleIcon className={"size-6"} />
          </DynamicTooltip>
        </div>
      </header>

      <Typography variant={"h3"} className={`font-normal`}>
        {value}
      </Typography>
    </div>
  );
}

export default StatusBar;
