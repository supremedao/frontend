"use client";
import Button from "@/components/Button";
import Chart from "@/components/Chart";
import TokensCockpit from "@/components/TokensCockpit";
import AdvancedInformation from "@/components/AdvancedInformation";
import Typography from "@/components/Typography";
import { Card } from "@/components/Card";
import Information from "@/components/Information";
import TVLStatus from "@/components/Statuses/TVLStatus";
import CurrentBalanceStatus from "@/components/Statuses/CurrentBalanceStatus";
import TotalRewardsEarnedStatus from "@/components/Statuses/TotalRewardsEarnedStatus";
import { ContractsDataProvider } from "@/Context/ContractsDataProvider";
import APRStatus from "@/components/Statuses/APRStatus";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/api/graphql";
import {
  useAccount,
  useDisconnect,
  useSwitchChain,
  WagmiProvider,
} from "wagmi";
import { config } from "@/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ConnectWalletDropdown from "@/components/ConnectWalletDropdown";
import Header from "@/components/Header";
import NoSSR from "@/app/NoSSR";
import Link from "next/link";

const ConnectButton = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className={"flex flex-wrap content-start gap-3"}>
      {account?.status === "connected" && (
        <div className={" "}>
          <Button size={"small"} color={"blue"} onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>
      )}
      {!account?.address && (
        <NoSSR>
          <ConnectWalletDropdown />
        </NoSSR>
      )}
    </div>
  );
};

function Product() {
  return (
    <>
      <Header>
        <div className={"flex content-start justify-end gap-2"}>
          <div className={"hidden shrink-0 lg:block"}>
            <Link href={"/genesis/#how-it-works"}>
              <Button size={"small"}>How it works</Button>
            </Link>
          </div>
          <ConnectButton />
        </div>
      </Header>
      <section>
        <div className={"mb-4 flex flex-col gap-4 sm:flex-row"}>
          <div className={"sm:w-2/3"}>
            <Chart />
          </div>
          <div className={"sm:w-1/3"}>
            <TokensCockpit />
          </div>
        </div>
        <div className={"mb-20 flex flex-wrap justify-items-stretch gap-4"}>
          <APRStatus />
          <TVLStatus />
          <CurrentBalanceStatus />
          <TotalRewardsEarnedStatus />
        </div>

        <div>
          <AdvancedInformation />
        </div>

        <div>
          <Information />
        </div>

        <article className={"mb-40"}>
          <Typography variant={"h2"}>
            The process is <span className={"text-primary"}>simple</span>
          </Typography>
          <div className="mb-28 grid w-full gap-4 py-6 md:grid-cols-3 lg:mb-0">
            <Card
              title="Stake your wstETH"
              icon={"icons/1.svg"}
              variant={"gray"}
              noise={false}
            >
              We bribe Ve Points holders with cryptocurrency assets you transfer
              — they have the right to vote on what pools get yield.
            </Card>
            <Card
              title="Track your progress"
              icon={"icons/2.svg"}
              variant={"gray"}
              noise={false}
            >
              Ve Points holders exercise their voting rights to determine yield
              locations and enhance profitability for your funds.
            </Card>
            <Card
              title="Withdraw wstETH"
              icon={"icons/3.svg"}
              variant={"gray"}
              noise={false}
            >
              When the process is over we return tokens back to you,
              substantially increasing your yield based on the investments made.
            </Card>
          </div>
        </article>

        <article className={"mb-40"}>
          <Typography variant={"h2"}>
            Learn more{" "}
            <span className={"text-primary"}>about the strategy</span>
          </Typography>
          <div className="mb-28 grid w-full gap-4 py-6 md:grid-cols-4 lg:mb-0">
            <Card title="Seamlessly Integrated Strategy" icon={"icons/I.svg"}>
              We optimize yield generation through seamless integration with
              Aura Finance, crvUSD, and Paladin, utilizing wstETH in high-yield
              pools to minimize risks.
            </Card>
            <Card title="Automated Yield Farming" icon={"icons/II.svg"}>
              The Power Agent generates debt on Curve in crvUSD and stakes these
              funds in high-yield Aura Finance pools, automating the yield
              generation process.
            </Card>
            <Card title="Risk Mitigation & Optimization" icon={"icons/III.svg"}>
              A portion of the generated yield is automatically allocated to
              close the Collateralized Debt Position (CDP), while another
              portion is optimized for additional returns on Paladin.
            </Card>
            <Card title="Streamlined Investment Process" icon={"icons/IV.svg"}>
              No more manual token selling, position locking, or bribe round
              participation, we are simplifying the investment process while
              targeting substantial yields on ETH investments.
            </Card>
          </div>
        </article>

        {/*<article className={"mb-10 flex flex-col gap-4 sm:flex-row"}>*/}
        {/*  <div className={"sm:w-3/5"}>*/}
        {/*    <Typography variant={"h2"}>*/}
        {/*      Learn more{" "}*/}
        {/*      <span className={"text-primary"}>about the platforms</span>*/}
        {/*    </Typography>*/}
        {/*  </div>*/}
        {/*  <div className={"sm:w-2/5"}>*/}
        {/*    <div className={"grid grid-cols-3 justify-end align-top"}>*/}
        {/*      <img src="/aura.png" alt="" />*/}
        {/*      <img src="/paladin.png" alt="" />*/}
        {/*      <img src="/curve.png" alt="" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</article>*/}
      </section>
    </>
  );
}

export default function Page() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ContractsDataProvider>
          <ApolloProvider client={client}>
            <Product />
          </ApolloProvider>
        </ContractsDataProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
  // return (
  //   <Web3ModalProvider initialState={initialState}>
  //     <Product />
  //   </Web3ModalProvider>
  // );
}
