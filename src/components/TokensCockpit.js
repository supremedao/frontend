"use client";
import { Stake } from "@/components/Stake";
import { useState } from "react";
import { Withdraw } from "@/components/Withdraw";

function TokensCockpit() {
  const [tabName, setTabName] = useState("stake");

  return (
    <article className={"rounded-md border bg-black/5 p-4"}>
      <div className={"-mx-4 mb-2 border-b px-4 pb-4"}>
        <header
          className={
            "grid grid-cols-2 gap-2 rounded-lg  bg-black/5 p-1   text-center"
          }
        >
          <button
            onClick={() => setTabName("stake")}
            className={`cursor-pointer rounded-lg ${tabName === "stake" ? "bg-white" : "text-gray-600"} p-2 transition-colors ease-in-out`}
          >
            Stake
          </button>
          <button
            onClick={() => setTabName("withdraw")}
            className={`cursor-pointer rounded-lg ${tabName === "withdraw" ? "bg-white" : "text-gray-600"} p-2 transition-colors ease-in-out`}
          >
            Withdraw
          </button>
        </header>
      </div>
      {tabName === "stake" && <Stake />}
      {tabName === "withdraw" && <Withdraw />}
    </article>
  );
}

export default TokensCockpit;
