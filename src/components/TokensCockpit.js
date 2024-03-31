"use client";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { Controller, FormProvider, useForm } from "react-hook-form";

const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

const ControllerPlus = ({ control, transform, name, defaultValue }) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field }) => (
      <input
        onChange={(e) => field.onChange(transform.output(e))}
        value={transform.input(field.value)}
      />
    )}
  />
);

function TokensCockpit() {
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
                  1048 wstETH available
                </Typography>
              </div>
              <div className={"mb-3 flex rounded-lg bg-black/5 p-2"}>
                <ControllerPlus
                  transform={{
                    input: (value) => (isNaN(value) ? "" : value.toString()),
                    output: (e) => {
                      const output = parseInt(e.target.value, 10);
                      return isNaN(output) ? 0 : output;
                    },
                  }}
                  control={control}
                  name="number"
                  defaultValue=""
                />
                <input
                  {...register("amount", {
                    required: true,
                    pattern: { value: /^[0-9]*\.?[0-9]*$/ },
                  })}
                  name={"amount"}
                  type="text"
                  className={
                    "mr-1 h-10 grow bg-transparent pl-1 text-lg outline-0"
                  }
                />
                <button type={"button"} className={"rounded bg-white px-2"}>
                  wstETH
                </button>
              </div>
              <div className={"mb-5 flex gap-2"}>
                <Button className={"grow rounded-lg"} size={"small"}>
                  25%
                </Button>
                <Button className={"grow rounded-lg"} size={"small"}>
                  50%
                </Button>
                <Button className={"grow rounded-lg"} size={"small"}>
                  75%
                </Button>
                <Button className={"grow rounded-lg"} size={"small"}>
                  Max
                </Button>
              </div>
              <div className={"flex"}>
                <input type="radio" />
                <Typography>Stake with Keeper</Typography>
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
            <Button type={"submit"} color={"blue"} className={"rounded-lg"}>
              Stake
            </Button>
          </article>
        </form>
      </FormProvider>
    </article>
  );
}

export default TokensCockpit;
