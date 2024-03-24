"use client";
import { Hero, HeroTitle } from "@/components/Hero";
import { Card, CardMedia, CardDate } from "@/components/Card";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Spline from "@/components/Spline";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            Gain instant access to high-APR DeFi strategies with a single token.
          </Typography>
          <div className="my-5 sm:flex md:mt-10">
            <Button
              color={"blue"}
              size={"large"}
              className={"xs:w-3/5 w-full md:w-3/5"}
            >
              Coming soon
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
            SupremeDAO automates DeFi strategies, removing the need for users to
            navigate complex processes. Stake your assets and the system
            automatically manages yield generation and risk mitigation.
          </Card>
          <Card title="DAO Governance" icon={"icons/trust.svg"}>
            Governance in SupremeDAO is community-led. Holders of $SUP tokens
            directly influence the platform&apos;s strategic decisions through
            DAO votes, ensuring transparent and democratic control over the
            vault&apos;s operations.
          </Card>
          <Card title="YAI" icon={"icons/yai.svg"}>
            YAI means “Yield Automated Instrument”. YAI centralizes our diverse
            strategies under one token. It&apos;s designed to increase in value
            as our strategies succeed, backed by a diversified asset pool. This
            makes investing in DeFi strategies straightforward and efficient.
          </Card>
          <Card title="DAO governed liquidity" icon={"icons/sup.svg"}>
            SupremeDAO manages its liquidity by creating proprietary pools and
            applying veTokenomics incentives and strategic investments to ensure
            profitability and stability, with all operations automated and
            governed by DAO
          </Card>
        </div>
      </article>

      <article className={"mb-40 lg:w-2/5"}>
        <Typography variant={"h2"}>
          Innovation powered <br />
          <Link
            href={"https://daoism.systems/"}
            target={"_blank"}
            className={"text-primary"}
          >
            by Daoism Systems
          </Link>
        </Typography>
        <Typography variant={"lead"} className={"mb-2"}>
          SupremeDAO is built by Daoism Systems, a development studio creating
          self-sovereign internet organizations, frontier tooling, and DeFi
          protocols since 2022. Being part of the Daoism ecosystem enhances our
          offerings through long-lasting and community-driven partnerships.
        </Typography>
        <Typography className={"text-sm text-gray-500"}>
          *Developed for the best.
        </Typography>
        <div className={"mt-10"}>
          <img src={"/partners.png"} />
        </div>
      </article>

      <article className={"mb-28"}>
        <Typography variant={"h2"}>
          Featured <span className={"text-primary"}>Strategies</span>
        </Typography>
        <div className="mb-28 grid min-h-[580px] w-full gap-4 py-6 md:grid-cols-3 lg:mb-0">
          <Card
            title="Alpha wstETH Maximizer"
            conic
            className={`min-h-[500px] border-none bg-[conic-gradient(var(--conic--down))] sm:bg-[conic-gradient(var(--conic--right))]`}
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Maximize your wstETH on Mainnet with our D2D farming strategy.
                Utilizing veTokenomics, this strategy enhances yield by
                leveraging vote-escrowed tokens effectively.
              </Typography>
              <div className={"mt-3"}>
                <Button className={"w-full"} size={"large"} color={"white"}>
                  Coming soon
                </Button>
              </div>
            </div>
          </Card>
          <Card
            title="SupremePool"
            conic
            className={
              "min-h-[500px] border-none bg-[conic-gradient(var(--conic--up-down))] sm:bg-[conic-gradient(var(--conic--left-right))]"
            }
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Through proprietary liquidity pools and veTokenomics incentives,
                our SupremePool strategy achieves superior returns and
                community-driven stability. Access a fully automated strategy
                directly steered by the SupremeDAO community.
              </Typography>
              <div className={"mt-3"}>
                <Button className={"w-full"} size={"large"} color={"white"}>
                  Get notified
                </Button>
              </div>
            </div>
          </Card>
          <Card
            title="L2 Yield Harvester"
            conic
            className={
              "min-h-[500px] border-none bg-[conic-gradient(var(--conic--up))] sm:bg-[conic-gradient(var(--conic--left))]"
            }
          >
            <div className={"flex h-full flex-col justify-between"}>
              <Typography>
                Explore the potential of Layer 2 networks and multi-chain
                ecosystems. Engineered to optimize incentives and influence
                voter behavior, securing and amplifying rewards across various
                networks for our community.
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
              Coming soon
            </Button>
          </div>
        </div>
      </Hero>

      {/*<LatestArticles />*/}

      <div
        className={
          "absolute right-0 top-[80rem] -z-10 grid h-[1150px] w-full overflow-hidden md:top-[82rem]"
        }
      >
        <div
          className={
            "absolute left-1/2 top-0 -ml-[1250px] w-[2300px] lg:-ml-[1050px]"
          }
        >
          <div
            className={
              "absolute inset-x-0 top-0 z-[1] h-1/2 bg-gradient-to-b from-[var(--background)] to-transparent"
            }
          />
          <div
            className={
              "absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-b from-transparent via-[var(--background)] to-[var(--background)]"
            }
          />
          <Spline
            scene={
              "https://prod.spline.design/67GWXoedqMNytxny/scene.splinecode"
            }
          />
        </div>
      </div>
    </>
  );
}
