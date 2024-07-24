import { useState } from "react";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { FormattedInput } from "@/components/Form/FormattedInput";
import { useStake } from "@/hooks/useStake";
import BigNumber from "bignumber.js";
import { useAccount, useBalance } from "wagmi";

import { ADDRESSES } from "@/contracts/addresses";
import Tooltip from "@/components/Tooltip";
import { useApp } from "@/Context/AppProvider";
import Link from "next/link";
import UseKeeperModal from "./UseKeeperModal";

export function Stake() {
  const { openModal } = useApp();
  let [isKeeperModalOpen, setIsKeeperModalOpen] = useState(false)
  const account = useAccount();
  const { stake, error, isPending, isConfirming, isConfirmed } = useStake();
  const { data, error: balanceError } = useBalance({
    address: account?.address,
    token: ADDRESSES.wstETH,
  });
  const formattedBalance = data?.formatted || 0;

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

    if (
      isPending ||
      !account?.address ||
      !data ||
      BigNumber(formattedBalance).lte(0)
    ) {
      openModal();
      return;
    }

    const formattedAmount = BigNumber(amount)
      .multipliedBy(Math.pow(10, 18))
      .toFixed(0);
    console.log(formattedAmount, "keeper", keeper);
    try {
      await stake(formattedAmount, { keeper });
      setValue("amount", 0);
      if (keeper) {
        openKeeperModal()
      }
    } catch (error) {
      console.log("rejection", error);
    }
  }

  function fillStakeValue(percentage = 0) {
    if (percentage === 100) {
      setValue("amount", formattedBalance);
    } else {
      setValue(
        "amount",
        BigNumber(formattedBalance).div(100).multipliedBy(percentage).toFixed(),
      );
    }
  }

  function closeKeeperModal() {
    setIsKeeperModalOpen(false)
  }

  function openKeeperModal() {
    setIsKeeperModalOpen(true)
  }

  return (
    <FormProvider {...methods}>
      <form action="#" onSubmit={handleSubmit(submit)}>
        <article className={"flex flex-col justify-between"}>
          <div className={"mb-24 sm:mb-36"}>
            <div className={"mb-2 justify-between flex flex-wrap items-center"}>
              <Typography className={"text-primary mr-1"}>Amount to Stake</Typography>
              <Typography className={"text-xs"}>
                Need wstETH? Swap easily on{" "}
                <Link href={"https://swap.cow.fi/#/1/swap/_/wstETH"} target="_blank" className={"text-primary underline"}>CowSwap</Link>
              </Typography>
            </div>
            <div className={"mb-1 flex rounded-lg bg-black/5 p-2"}>
              <FormattedInput
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
              <button type={"button"} className={"rounded bg-white px-2"}>
                wstETH
              </button>
            </div>

            <article className={"mb-1 flex gap-2"}>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!data || BigNumber(formattedBalance).lte(0)}
                onClick={() => fillStakeValue(25)}
              >
                25%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!data || BigNumber(formattedBalance).lte(0)}
                onClick={() => fillStakeValue(50)}
              >
                50%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!data || BigNumber(formattedBalance).lte(0)}
                onClick={() => fillStakeValue(75)}
              >
                75%
              </Button>
              <Button
                className={"grow rounded-lg"}
                size={"small"}
                disabled={!data || BigNumber(formattedBalance).lte(0)}
                onClick={() => fillStakeValue(100)}
              >
                Max
              </Button>
            </article>
            <div className="mb-4 text-right">
              <Typography className={"text-sm text-black/50"}>
                {!data ? 0 : formattedBalance} wstETH available
              </Typography>
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
                  Stake with keeper to save gas
                </Typography>
              </label>
              <div className="ml-4">
                <Tooltip
                  content={
                    <>
                      <Typography variant={"h5"}>Keeper Function</Typography>
                      When the Keeper is activated, your stake is automatically
                      processed together with other stakes. We execute this
                      process once a day or when the total staked amount reaches
                      at least 10 ETH. This helps you save on gas fees. If you
                      turn off the Keeper function, your stake will be processed
                      immediately, but you will be responsible for the gas fees.
                    </>
                  }
                >
                  <span>
                    <InformationCircleIcon className={"size-6"} />
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
          <Button
            type={"submit"}
            size={"small"}
            color={"blue"}
            className={"rounded-lg py-3"}
          >
            {isPending ? "Confirming..." : "Stake"}
          </Button>
          <Typography className={"mt-2 px-2 text-xs"}>
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
          </Typography>
          <Typography className={"mt-2 px-2 text-xs"}>
            {error && error.shortMessage}
          </Typography>
          <UseKeeperModal 
            isKeeperModalOpen={isKeeperModalOpen} 
            closeKeeperModal={closeKeeperModal} 
          />
        </article>
      </form>
    </FormProvider>
  );
}
