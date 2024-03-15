import Spline from "@/components/Spline";

function Hero({ children, spline, img = "" }) {
  return (
    <div className="relative mx-auto my-4 flex min-h-[600px] flex-col-reverse items-center justify-between px-4 sm:px-6 md:flex-row md:pt-10">
      <div className="flex items-center md:w-3/6 md:pr-5">
        <div className="text-left">{children}</div>
      </div>
      <div className="grid h-[400px] w-full items-stretch overflow-hidden md:h-[600px] md:w-3/6">
        {img && <img src={img} width={"60%"} className={"mx-auto "} />}
        {spline && <Spline scene={spline} />}
      </div>
    </div>
  );
}

export default Hero;
