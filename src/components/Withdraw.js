import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { FormattedInput } from "@/components/Form/FormattedInput";
import { useLeverageContract } from "@/hooks/useLeverageContract";
import { utils } from "ethers";
import dynamic from "next/dynamic";
import { useEthers } from "@usedapp/core";
const DynamicTooltip = dynamic(() => import("microtip-react"), {
  loading: () => <p>Loading...</p>,
});

export function Withdraw() {
  const { account } = useEthers();
  const { withdraw, withdrawState } = useLeverageContract();

  // const { wstEthBalance } = useContractsData();
  const wstEthBalance = 5;
  const methods = useForm({
    defaultValues: {
      amount: "0.00",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  async function submit(data) {
    const { amount } = data;
    withdraw(utils.parseEther(amount));
  }

  return (
    <FormProvider {...methods}>
      <form action="#" onSubmit={handleSubmit(submit)}>
        <article className={"flex flex-col justify-between"}>
          <div className={"mb-20"}>
            <div className={"mb-2"}>
              <Typography className={""}>Claimable rewards</Typography>
            </div>
            <div className={"mb-3 flex rounded-lg bg-black/5 p-2"}>
              <FormattedInput
                className={
                  "mr-1 h-10 grow bg-transparent pl-1 text-lg outline-0"
                }
                control={control}
                name="amount"
                defaultValue=""
                required
              />

              <button type={"button"} className={"rounded bg-white px-2"}>
                wstETH
              </button>
            </div>
          </div>
          <div>Status: {withdrawState.status}</div>
          <Button
            type={"submit"}
            color={"blue"}
            className={"rounded-lg"}
            disabled={!account || !wstEthBalance || wstEthBalance <= 0}
          >
            Withdraw
          </Button>
        </article>
      </form>
    </FormProvider>
  );
}
