function Hero({ children, img = "" }) {
  return (
    <div className="relative mx-auto my-4 flex flex-col-reverse items-center justify-between px-4 sm:px-6 md:flex-row">
      <div className="flex items-center py-5 md:w-3/6 md:pb-20 md:pr-10 md:pt-10">
        <div className="text-left">{children}</div>
      </div>
      <div className="-my-4 flex h-full items-center md:w-2/5 md:pb-10 md:pl-10">
        <div className="relative w-full p-3 md:p-0">
          <div className={"relative w-full"}>
            <img src={img} width={"60%"} className={"mx-auto "} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
