import Spline from "@/components/Spline";

function WaveBG() {
  return (
    <div
      className={
        "pointer-events-none absolute right-0 top-[145rem] -z-10 grid h-[1150px] w-full overflow-hidden md:top-[82rem]"
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
        <video
          className={"pointer-events-none mx-auto"}
          autoPlay
          muted={true}
          controls={false}
          loop
        >
          <source src={"/videos/wave.mp4"} type="video/mp4" />
        </video>
        {/*<Spline*/}
        {/*  scene={"https://prod.spline.design/67GWXoedqMNytxny/scene.splinecode"}*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default WaveBG;
