import Typography from "@/components/Typography";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useContractsData } from "@/Context/ContractsDataProvider";
import BigNumber from "bignumber.js";
import { formatEther } from "ethers/lib/utils";

const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

export function LiquidationRange({
  className = "",
  hint = "lorem ipsum dolot lorem ipsum dolot ",
}) {
  const { debt } = useContractsData();
  const value = "N/A";

  return (
    <div
      className={`relative grow rounded-md border bg-black/5 p-4 ${className}`}
    >
      <div className="tooltipContainer absolute right-4 top-4">
        <DynamicTooltip label={hint} position={"bottom"} size={"small"}>
          <InformationCircleIcon className={"size-6"} />
        </DynamicTooltip>
      </div>

      <article className={"flex flex-col sm:flex-row"}>
        <div className={"mb-4 sm:mb-0 sm:w-1/3"}>
          <header className={"mb-2"}>
            <Typography variant={"lead"} className={"font-light text-primary"}>
              Liquidation Range
            </Typography>
          </header>
          <Typography variant={"h3"} className={`font-normal`}>
            {value}
          </Typography>
        </div>
        <div className={"flex flex-wrap gap-12 sm:w-2/3"}>
          <div>
            <Typography className={"mb-4 font-light"}>
              Current Balance
            </Typography>
            <Typography>$ {formatEther(debt)}</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>Deposited</Typography>
            <Typography>N/A</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>Loss Amount</Typography>
            <Typography>$ N/A</Typography>
          </div>
          <div>
            <Typography className={"mb-4 font-light"}>% Loss</Typography>
            <Typography>N/A</Typography>
          </div>
        </div>
      </article>
    </div>
  );
}
