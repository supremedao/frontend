import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { FormattedInput } from "@/components/Form/FormattedInput";
import { useLeverageContract } from "@/hooks/useLeverageContract";
import dynamic from "next/dynamic";
import BigNumber from "bignumber.js";
import { useAccount } from "wagmi";
import { formatEther, formatUnits } from "viem";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { log } from "next/dist/server/typescript/utils";

const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

export function Stake() {
  const account = useAccount();
  const { stake, status, error } = useLeverageContract();
  const { balanceOf } = useContractsData();
  console.log("balanceOf", balanceOf);
  const formattedBalance = formatEther(balanceOf || "");
  // const balanceOf = 5;
  const methods = useForm({
    defaultValues: {
      amount: "0.00",
      keeper: false,
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  async function submit(data) {
    const { amount, keeper } = data;
    console.log("data", data);
    const formattedAmount = BigNumber(amount)
      .multipliedBy(Math.pow(10, 18))
      .toFixed();
    console.log(formattedAmount, "keeper", keeper);
    stake(formattedAmount, { keeper });
  }

  function fillStakeValue(percentage = 0) {
    if (percentage === 100) {
      setValue("amount", formattedBalance);
    } else {
      setValue(
        "amount",
        BigNumber(formattedBalance)
          .div(100)
          .multipliedBy(percentage)
          .toFixed(2),
      );
    }
  }

  return (
    <FormProvider {...methods}>
      <form action="#" onSubmit={handleSubmit(submit)}>
        <article className={"flex flex-col justify-between"}>
          <div className={"mb-36"}>
            <div className={"mb-2 flex justify-between "}>
              <Typography className={""}>Amount to Stake</Typography>
              <Typography className={"text-black/50"}>
                {!formattedBalance ? 0 : BigNumber(formattedBalance).toFixed(5)}{" "}
                wstETH available
              </Typography>
            </div>
            <div className={"mb-3 flex rounded-lg bg-black/5 p-2"}>
              <FormattedInput
                // transform={
                //   {
                //     input: (value) => (isNaN(value) ? "" : value.toString()),
                //     output: (e) => {
                //       const output = parseInt(e.target.value, 10);
                //       return isNaN(output) ? 0 : output;
                //     },
                //   }
                // }
                className={
                  "mr-1 h-10 grow bg-transparent pl-1 text-lg outline-0"
                }
                control={control}
                name="amount"
                defaultValue=""
                required
                // onkeypress="return (event.charCode >= 48 && event.charCode <= 57) ||event.charCode == 46 || event.charCode == 0 "
                // onfocusout="validateinput(this)"
              />
              {/*<input*/}
              {/*  {...register("amount", {*/}
              {/*    required: true,*/}
              {/*    pattern: { value: /^[0-9]*\.?[0-9]*$/ },*/}
              {/*  })}*/}
              {/*  */}
              {/*  name={"amount"}*/}
              {/*  type="text"*/}
              {/*  className={*/}
              {/*    "mr-1 h-10 grow bg-transparent pl-1 text-lg outline-0"*/}
              {/*  }*/}
              {/*/>*/}
              <button type={"button"} className={"rounded bg-white px-2"}>
                wstETH
              </button>
            </div>
            <div className={"mb-5 flex gap-2"}>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!balanceOf || balanceOf <= 0}
                onClick={() => fillStakeValue(25)}
              >
                25%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!balanceOf || balanceOf <= 0}
                onClick={() => fillStakeValue(50)}
              >
                50%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!balanceOf || balanceOf <= 0}
                onClick={() => fillStakeValue(75)}
              >
                75%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!balanceOf || balanceOf <= 0}
                onClick={() => fillStakeValue(100)}
              >
                Max
              </Button>
            </div>
            <div className={"flex"}>
              <label className="ml-1 inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  value=""
                  {...register("keeper")}
                  className="peer sr-only"
                />
                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <Typography className={"ms-3 font-medium "}>
                  Stake with Keeper
                </Typography>
              </label>
              <div className="tooltipContainer ml-4">
                <DynamicTooltip
                  label={
                    "Your transaction will revert if the price changes unfavourably by more than this percentage"
                  }
                  position={"bottom"}
                  size={"small"}
                >
                  <InformationCircleIcon className={"size-6"} />
                </DynamicTooltip>
              </div>
            </div>
          </div>
          <Button
            type={"submit"}
            size={"small"}
            color={"blue"}
            className={"rounded-lg py-3"}
            disabled={!account?.address || !balanceOf || balanceOf <= 0}
          >
            Stake
          </Button>
          <Typography className={"mt-2 px-2 text-xs"}>
            Status: {status}
          </Typography>
          <Typography className={"mt-2 px-2 text-xs"}>
            {error && error.shortMessage}
          </Typography>
        </article>
      </form>
    </FormProvider>
  );
}
