"use client";

import Header from "@/components/Header";
import { Hero, HeroTitle } from "@/components/Hero";
import { Card, CardMedia, CardDate } from "@/components/Card";
import { Footer } from "@/components/Footer";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Link from "@/components/Link";

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-xl px-3">
      <Header />

      <article className={"mb-36"}>
        <Hero
          spline={
            "https://prod.spline.design/M7xPf-bpJaJkwpRk/scene.splinecode"
          }
        >
          <HeroTitle>
            <span className="text-primary">Maximize yield</span>
            {` `} with a single-token DeFi optimizer
          </HeroTitle>
          <Typography variant={"lead"}>
            Gain instant access to high-APR DeFi strategies designed by
            professionals with a single token.
          </Typography>
          <div className="my-5 sm:flex md:mt-10">
            <Button
              shadow
              color={"blue"}
              size={"large"}
              className={"xs:w-3/5 w-full md:w-3/5"}
            >
              Stake now
            </Button>
          </div>
          <p className={"text-xs"}>
            *Beta version now available for wstETH holders
          </p>
        </Hero>
      </article>

      <article className={"mb-40"}>
        <Typography variant={"h2"}>
          <span className={"text-primary"}>The pillars</span> of our ecosystem
        </Typography>
        <div className="mb-28 grid w-full gap-4 py-6 md:grid-cols-4 lg:mb-0">
          <Card title="Automated strategies" icon={"icons/strategy.svg"}>
            These strategies are the core of the SupremeDAO ecosystem, deployed
            progressively and centred around existing liquidity pools managed by
            our partners.
          </Card>
          <Card title="Trustless participation" icon={"icons/trust.svg"}>
            We run regular smart contract audits, implement transparent risk
            management policies, and offer DAO governance to ensure everyone is
            fairly involved.
          </Card>
          <Card title="$YAI token, hold for yield" icon={"icons/yai.svg"}>
            $YAI stands for Yield Automated Instrument. Holding it gives you
            instant exposure to a wide selection of SupremeDAO’s
            yield-generating strategies.
          </Card>
          <Card title="$SUP token, vote for yield" icon={"icons/sup.svg"}>
            $SUP is our governance token. Holders play a vital role in our
            ecosystem by determining which strategies are implemented for yield
            generation.
          </Card>
        </div>
      </article>

      <article className={"mb-40 lg:w-2/5"}>
        <Typography variant={"h2"}>
          Innovation powered <br />
          <span className={"text-primary"}>by Daoism Systems</span>
        </Typography>
        <Typography variant={"lead"}>
          SupremeDAO is built by Daoism Systems, a development studio creating
          self-sovereign internet organizations, frontier tooling, and DeFi
          protocols since 2022. Being part of the Daoism ecosystem enhances our
          offerings through long-lasting and community-driven partnerships.
        </Typography>
      </article>

      <article className={"mb-40"}>
        <Typography variant={"h2"}>
          Featured <span className={"text-primary"}>Strategies</span>
        </Typography>
        <div className="mb-28 grid min-h-[580px] w-full gap-4 py-6 md:grid-cols-3 lg:mb-0">
          <Card
            title="Alpha wstETH"
            conic
            className={`min-h-[500px] bg-[conic-gradient(var(--conic--down))] sm:bg-[conic-gradient(var(--conic--right))]`}
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Join SupremeDAO’s first strategy. Stake wstETH and secure extra
                yield from our upcoming launch airdrop.
              </Typography>
              <div className={"mt-3"}>
                <Button className={"w-full"} size={"large"} color={"white"}>
                  Stake now
                </Button>
              </div>
            </div>
          </Card>
          <Card
            title="Alpha wstETH"
            conic
            className={
              "min-h-[500px] bg-[conic-gradient(var(--conic--up-down))] sm:bg-[conic-gradient(var(--conic--left-right))]"
            }
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Join SupremeDAO’s first strategy. Stake wstETH and secure extra
                yield from our upcoming launch airdrop.
              </Typography>
              <div className={"mt-3"}>
                <Button className={"w-full"} size={"large"} color={"white"}>
                  Get notified
                </Button>
              </div>
            </div>
          </Card>
          <Card
            title="Alpha wstETH"
            conic
            className={
              "min-h-[500px] bg-[conic-gradient(var(--conic--up))] sm:bg-[conic-gradient(var(--conic--left))]"
            }
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Join SupremeDAO’s first strategy. Stake wstETH and secure extra
                yield from our upcoming launch airdrop.
              </Typography>
              <div className={"mt-3"}>
                <Button className={"w-full"} size={"large"} color={"white"}>
                  Get notified
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </article>
      <Hero
        spline={"https://prod.spline.design/oOLNnQiBDf87m8H8/scene.splinecode"}
      >
        <HeroTitle>
          Boost your ETH holding{" "}
          <span className={"text-primary"}>with a 10%+ APR</span>
        </HeroTitle>
        <Typography variant={"lead"}>
          SupremeDAO’s first strategy features a stunning 10%+ APR for wstETH
          holders. While this strategy does not feature $YAI, it perfectly
          illustrates the mechanics of our ecosystem and strategies.
        </Typography>
        <div className="my-5 sm:flex md:mt-8">
          <div className="">
            <Button className="w-full" color={"blue"} size={"large"}>
              Stake now
            </Button>
          </div>
        </div>
      </Hero>

      <article className={"mb-12 sm:mb-36"}>
        <Typography variant={"h2"}>Latest Articles</Typography>
        <div className="grid w-full gap-4 py-6 md:grid-cols-3">
          <Card>
            <div className={"-mt-2"}>
              <CardMedia image={"/assets/media/img.png"}></CardMedia>
              <Link href={"#"} variant={"h4"}>
                How is SupremeDAO democratizing access to complex DeFi
                strategies? strategies
              </Link>
              <CardDate>Today, 17:35</CardDate>
            </div>
          </Card>
          <Card>
            <div className={"-mt-2"}>
              <CardMedia image={"/assets/media/img.png"}></CardMedia>
              <Link href={"#"} variant={"h4"}>
                How is SupremeDAO democratizing access to complex DeFi
                strategies? strategies
              </Link>
              <CardDate>Today, 17:35</CardDate>
            </div>
          </Card>
          <Card>
            <div className={"-mt-2"}>
              <CardMedia image={"/assets/media/img.png"}></CardMedia>
              <Link href={"#"} variant={"h4"}>
                How is SupremeDAO democratizing access to complex DeFi
                strategies? strategies
              </Link>
              <CardDate>Today, 17:35</CardDate>
            </div>
          </Card>
        </div>
      </article>

      <Footer />

      <div className="noise-bg" />
    </main>
  );
}
