import Spline from "@/components/Spline";

function Hero({ children, video, spline, img = "" }) {
  return (
    <>
      <div className="relative mx-auto mb-4 flex min-h-[600px] flex-col-reverse items-center justify-between px-2 md:flex-row md:pt-0">
        <div className="z-10 flex items-center md:w-3/6 md:pr-5">
          <div className="text-left">{children}</div>
        </div>
        <div className="flex h-[400px] w-full justify-center md:h-[700px] md:w-3/6">
          {img && <img src={img} width={"60%"} className={"mx-auto "} />}
          {video && (
            <video
              className={"pointer-events-none mx-auto h-[90%]"}
              autoPlay
              muted={true}
              controls={false}
              playsInline
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
          )}
          {spline && <Spline scene={spline} />}
        </div>
      </div>
    </>
  );
}

export default Hero;
