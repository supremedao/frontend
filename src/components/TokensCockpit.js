"use client";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useContractsData } from "@/Context/ContractsDataProvider";

const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

function validateinput(el) {
  if ((parseFloat(el.value) < 99) & (parseFloat(el.value) > 0)) {
    el.value = parseFloat(el.value).toFixed(2);
  } else {
    //show invalidate message.
    //clear the input value.
    el.value = "";
  }
}

const ControllerPlus = ({
  control,
  transform,
  name,
  className = "",
  defaultValue,
}) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field }) => (
      <input
        onChange={(e) => {
          console.log(e.target.value);
          const regex = /^\d+(\.\d{0,2})?$/;
          if (regex.test(e.target.value)) {
            field.onChange(e);
          }
        }}
        value={transform?.input(field.value) || field.value}
        className={className}
        // onKeyDown={(event) => {
        //   console.log(event.keyCode);
        //   return (
        //     (event.keyCode >= 48 && event.keyCode <= 57) ||
        //     event.keyCode === 46 ||
        //     event.keyCode === 190 ||
        //     event.keyCode === 0
        //   );
        // }}
        // onBlur={validateinput}
      />
    )}
  />
);

function TokensCockpit() {
  const { wstEthBalance } = useContractsData();
  const methods = useForm({
    defaultValues: {
      operation: "stake",
      amount: "0.00",
    },
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const operation = watch("operation");

  async function submit(data) {
    console.log(data);
  }

  const headerClassName = "header";

  return (
    <article className={"rounded-md border bg-black/5 p-4"}>
      <FormProvider {...methods}>
        <form action="#" onSubmit={handleSubmit(submit)}>
          <header
            className={
              "mb-8 grid grid-cols-2 gap-2 rounded-lg bg-black/5 p-1 text-center"
            }
          >
            <label
              className={`cursor-pointer rounded-lg ${operation === "stake" ? "bg-white" : ""} easy-in-out px-2 py-3 transition-colors`}
            >
              Stake
              <input
                {...register("operation", { required: true })}
                name={"operation"}
                type="radio"
                className={"hidden bg-white"}
                value={"stake"}
              />
            </label>
            <label
              className={`cursor-pointer rounded-lg ${operation === "withdraw" ? "bg-white" : ""} easy-in-out px-2 py-3 transition-colors`}
            >
              Withdraw
              <input
                {...register("operation", { required: true })}
                name={"operation"}
                type="radio"
                className={"hidden bg-white"}
                value={"withdraw"}
              />
            </label>
          </header>

          <article className={"flex flex-col justify-between"}>
            <div className={"mb-20"}>
              <div class={"mb-2 flex justify-between "}>
                <Typography className={""}>Amount to Stake</Typography>
                <Typography className={"text-black/50"}>
                  {wstEthBalance || "N/A"} wstETH available
                </Typography>
              </div>
              <div className={"mb-3 flex rounded-lg bg-black/5 p-2"}>
                <ControllerPlus
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
                  disabled={!wstEthBalance || wstEthBalance <= 0}
                >
                  25%
                </Button>
                <Button
                  className={"grow rounded-lg"}
                  size={"small"}
                  disabled={!wstEthBalance || wstEthBalance <= 0}
                >
                  50%
                </Button>
                <Button
                  className={"grow rounded-lg"}
                  size={"small"}
                  disabled={!wstEthBalance || wstEthBalance <= 0}
                >
                  75%
                </Button>
                <Button
                  className={"grow rounded-lg"}
                  size={"small"}
                  disabled={!wstEthBalance || wstEthBalance <= 0}
                >
                  Max
                </Button>
              </div>
              <div className={"flex"}>
                <label className="ml-1 inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
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
              color={"blue"}
              className={"rounded-lg"}
              disabled={!wstEthBalance || wstEthBalance <= 0}
            >
              Stake
            </Button>
          </article>
        </form>
      </FormProvider>
    </article>
  );
}

export default TokensCockpit;
