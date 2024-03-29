import Button from "@/components/Button";
import Chart from "@/components/Chart";
import TokensCockpit from "@/components/TokensCockpit";
import StatusBar from "@/components/StatusBar";
import AdvancedInformation from "@/components/AdvancedInformation";
import Typography from "@/components/Typography";
import { Card } from "@/components/Card";

function Information() {
  return (
    <section className={"mx-auto mb-40 pt-10 text-center sm:w-11/12"}>
      <Typography className="mb-8">
        Prior to engaging with SupremeDAO’s strategy throughly review the
        documentation and terms and conditions provided. Keep in mind that
        returns can fluctuate: we recommend using the user interface to preview
        both deposits and withdraws for current performance estimates. By
        proceeding with your deposit, you acknowledge and accept these terms and
        assert your understanding of the strategy’s mechanics and inherent
        market risks.
      </Typography>
      <article
        className={
          "bg-[url('/product-bg.png')] bg-[length:100%]  bg-top bg-no-repeat pb-10 pt-32"
        }
      >
        <div className={"mx-auto sm:w-1/2"}>
          <Typography variant={"h3"} className={"mb-8 text-primary"}>
            How it works
          </Typography>
          <Typography variant={"h1"} className={"mb-4"}>
            Forget manual actions, achieve more yield
          </Typography>
          <Typography variant={"lead"} className={"mb-20 text-black/50"}>
            We use your wrapped staked ETH to borrow money and invest in
            high-yield pools. Profits are used to pay off the loan and reinvest
            for better returns. All fully automated.
          </Typography>
        </div>
      </article>
    </section>
  );
}

export default function Product() {
  return (
    <section>
      <div className={"flex justify-end gap-2"}>
        <Button>How it works</Button>
        <Button>Connect wallet</Button>
      </div>

      <div className={""}>
        <div className={"w-2/3"}>
          <Chart />
        </div>
        <div className={"w-1/3"}>
          <TokensCockpit />
        </div>
        <div className={"w-full"}>
          <StatusBar title={"APR"} />
          <StatusBar title={"APR"} />
          <StatusBar title={"APR"} />
          <StatusBar title={"APR"} />
          <StatusBar title={"APR"} />
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
            <Card title="Stake your wstETH" icon={"icons/1.svg"}>
              We bribe Ve Points holders with cryptocurrency assets you transfer
              — they have the right to vote on what pools get yield.
            </Card>
            <Card title="Track your progress" icon={"icons/2.svg"}>
              Ve Points holders exercise their voting rights to determine yield
              locations and enhance profitability for your funds.
            </Card>
            <Card title="Withdraw wstETH" icon={"icons/3.svg"}>
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

        <article className={"mb-10 flex flex-col gap-4 sm:flex-row"}>
          <div className={"sm:w-3/5"}>
            <Typography variant={"h2"}>
              Learn more{" "}
              <span className={"text-primary"}>about the platforms</span>
            </Typography>
          </div>
          <div className={"sm:w-2/5"}>
            <div className={"grid grid-cols-3 justify-end align-top"}>
              <img src="/aura.png" alt="" />
              <img src="/paladin.png" alt="" />
              <img src="/curve.png" alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
