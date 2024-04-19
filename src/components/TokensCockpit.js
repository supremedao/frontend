"use client";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useContractsData } from "@/Context/ContractsDataProvider";
import BigNumber from "bignumber.js";
import { useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";
import { useLeverageContract } from "@/hooks/useLeverageContract";
import { Stake } from "@/components/Stake";
import { useState } from "react";
import { Withdraw } from "@/components/Withdraw";

function TokensCockpit() {
  const [tabName, setTabName] = useState("stake");

  return (
    <article className={"rounded-md border bg-black/5 p-4"}>
      <header
        className={
          "mb-8 grid grid-cols-2 gap-2 rounded-lg bg-black/5 p-1 text-center"
        }
      >
        <button
          onClick={() => setTabName("stake")}
          className={`cursor-pointer rounded-lg ${tabName === "stake" ? "bg-white" : ""} easy-in-out px-2 py-3 transition-colors`}
        >
          Stake
        </button>
        <button
          onClick={() => setTabName("withdraw")}
          className={`cursor-pointer rounded-lg ${tabName === "withdraw" ? "bg-white" : ""} easy-in-out px-2 py-3 transition-colors`}
        >
          Withdraw
        </button>
      </header>
      {tabName === "stake" && <Stake />}
      {tabName === "withdraw" && <Withdraw />}
    </article>
  );
}

export default TokensCockpit;
