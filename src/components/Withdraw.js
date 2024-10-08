import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { FormattedInput } from "@/components/Form/FormattedInput";
import { useAccount } from "wagmi";
import { formatEther, parseEther } from "viem";
import { useContractsData } from "@/Context/ContractsDataProvider";
import { useWithdraw } from "@/hooks/useWithdraw";
import { useCurrentWSTBalance } from "@/hooks/useCurrentWSTBalance";
import BigNumber from "bignumber.js";
import { useState } from "react";
import { useApp } from "@/Context/AppProvider";

export function Withdraw() {
  const { openModal } = useApp();
  const account = useAccount();
  const [validationError, setValidationError] = useState("");
  const { withdraw, isPending, isConfirmed, isConfirming, error } =
    useWithdraw();
  const { wstEthBalance } = useContractsData();
  const currentBalance = useCurrentWSTBalance();
  const { balanceOf } = useContractsData();

  // const wstEthBalance = 5;
  const methods = useForm({
    defaultValues: {
      totalAmount: currentBalance,
      amount: "0.00",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = methods;

  async function submit(data) {
    setValidationError("");

    if (
      isPending ||
      !account?.address ||
      !wstEthBalance ||
      wstEthBalance <= 0
    ) {
      openModal();
      return;
    }

    const { amount } = data;
    if (BigNumber(amount).gt(currentBalance)) {
      setValidationError("Value exceeds total balance");
      return;
    }

    const shares = BigNumber(amount)
      .div(currentBalance)
      .multipliedBy(balanceOf)
      .toFixed(0);
    console.log(
      "------- shares",
      `
      amount: ${amount}
      currentBalance: ${currentBalance}
      balanceOf: ${balanceOf}
      shares: ${shares}
    `,
    );
    withdraw(shares);
  }

  return (
    <FormProvider {...methods}>
      <form action="#" onSubmit={handleSubmit(submit)}>
        <article className={""}>
          <div className={"mb-8 flex flex-col"}>
            <div className={""}>
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
            <Button
              type={"submit"}
              size={"small"}
              color={"blue"}
              className={"rounded-lg py-3"}
            >
              {isPending ? "Confirming..." : "Withdraw"}
            </Button>
          </div>
          <div className={"mb-12 flex flex-col"}>
            <div className={""}>
              <div className={"mb-2"}>
                <Typography className={""}>Total deposits</Typography>
              </div>
              <div className={"mb-3 flex rounded-lg bg-black/5 p-2"}>
                <FormattedInput
                  className={
                    "mr-1 h-10 grow bg-transparent pl-1 text-lg outline-0"
                  }
                  control={control}
                  name="totalAmount"
                  required
                />

                <button type={"button"} className={"rounded bg-white px-2"}>
                  wstETH
                </button>
              </div>
            </div>
            <Button
              onClick={async () => {
                const totalAmount = getValues("totalAmount");
                setValue("amount", totalAmount);
              }}
              type={"submit"}
              color={"white"}
              size={"small"}
              className={"rounded-lg py-3"}
            >
              {isPending ? "Confirming..." : "Withdraw"}
            </Button>
            <Typography className={"mt-2 px-2 text-xs"}>
              {isConfirming && <div>Waiting for confirmation...</div>}
              {isConfirmed && <div>Transaction confirmed.</div>}
            </Typography>
            <Typography className={"mt-2 px-2 text-xs text-red-600"}>
              {(error && error.shortMessage) || validationError}
            </Typography>
          </div>
        </article>
      </form>
    </FormProvider>
  );
}
