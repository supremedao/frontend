import Typography from "@/components/Typography";

function Information() {
  return (
    <section className={"mx-auto mb-10 text-center sm:w-11/12"}>
      <Typography className="mb-8">
        Prior to engaging with SupremeDAO’s strategy thoroughly review the
        documentation and terms and conditions provided. Keep in mind that
        returns can fluctuate: we recommend using the user interface to preview
        both deposits and withdraws for current performance estimates. By
        proceeding with your deposit, you acknowledge and accept these terms and
        assert your understanding of the strategy’s mechanics and inherent
        market risks.
      </Typography>
      <article
        className={
          "relative bg-[length:100%]  bg-top bg-no-repeat lg:bg-[url('/product-bg.png')] "
        }
      >
        <div
          className={ // eslint-disable-line
            "bg-gradient-to-t from-[var(--background)] from-10% via-transparent via-30% to-transparent sm:pb-32 pt-10 sm:pt-36" // eslint-disable-line
          }
        >
          <div className={"invisible lg:visible"}>
            <img
              src={"/icons/paladin.png"}
              alt="Paladin"
              className={
                "absolute right-[120px] top-[95px] h-[137px] animate-pulse"
              }
            />
            <img
              src={"/icons/aura.png"}
              alt="Aura"
              className={
                "absolute right-[100px] top-[400px] h-[137px] animate-pulse"
              }
            />
            <img
              src={"/icons/curve.png"}
              alt="Curve"
              className={
                "absolute left-[80px] top-[200px] h-[137px] animate-pulse"
              }
            />
          </div>
          <div className={"mx-auto sm:w-1/2"}>
            <Typography variant={"h3"} className={"mb-8 text-primary"}>
              How it works
            </Typography>
            <Typography variant={"h1"} className={"mb-4"}>
              Forget manual actions, achieve more yield
            </Typography>
            <Typography variant={"lead"} className={"mb-20 text-black/50"}>
              We use your wrapped staked ETH to borrow money and invest in
              high-yield pools. Profits are used to pay off the loan and
              reinvest for better returns. All fully automated.
            </Typography>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Information;
