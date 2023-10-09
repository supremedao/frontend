"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Stake = () => {
  const [progress, setProgress] = React.useState(13);
  //   const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);

    // fetch('dsada').then(res => setProgress(res));
    //   fetch("dsada").then((res) => setProgress(res));
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 flex flex-col gap-4">
      <div className="bg-[#101217] grid rounded-2xl px-8 py-4 ">
        <div className="flex flex-col text-2xl leading-7 gap-2 mb-3 ">
          Strategy Description
        </div>
        <div className=" font-medium leading-[1.375rem] text-s-gray">
          Lorem ipsum dolor sit amet consectetur. Nibh phasellus gravida lectus
          et sit suscipit. Quam nisl dis in orci ac adipiscing viverra amet.{" "}
        </div>
      </div>
      <div className="bg-[#101217]   grid-cols-2 grid md:grid-cols-4  rounded-2xl px-4 py-5 gap-3 ">
        <div className="bg-gradient-to-r from-[#337ec2] via-[#1d4a55] to-[#477655] p-[0.025rem] rounded-2xl ">
          <div className="bg-[#252525] rounded-2xl  py-4 px-14 text-xl ">
            <div className="capitalize  text-s-gray font-thin mb-2">
              Annual Percentage Rate
              <span
                className=""
                style={{
                  backgroundImage: `url('images/info.png')`,
                  height: "fill",
                }}
              ></span>
            </div>
            <div className="text-s-aqua">85%</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#337ec2] via-[#1d4a55] to-[#477655] p-[0.025rem] rounded-2xl ">
          <div className="bg-[#252525] rounded-2xl  py-4 px-14 text-xl ">
            <div className="capitalize  text-s-gray font-light mb-2">
              Total Value locked
              <span
                className=""
                style={{
                  backgroundImage: `url('images/info.png')`,
                  height: "fill",
                }}
              ></span>
            </div>
            <div className="">0.0000</div>
          </div>
        </div>
        <div className="bg-black rounded-2xl  py-4 px-14 text-xl ">
          <div className=" text-s-gray font-light mb-2">
            wstETH
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="">0.0000</div>
        </div>
        <div className="bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="capitalize  text-s-gray font-light mb-2">
            Total Debt
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="">0.0000</div>
        </div>
      </div>
      <div className="bg-[#101217]  grid-cols-2 grid md:grid-cols-4  lg:grid-cols-4  rounded-2xl px-4 py-5 gap-3 ">
        <div className="bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="capitalize  text-s-gray font-light mb-2">
            Status
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="text-s-aqua text-sm">Healthy</div>
        </div>
        <div className="bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="capitalize  text-s-gray font-light mb-2">
            Health
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="text-s-aqua text-sm">0.00%</div>
        </div>
        <div className="bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="capitalize  text-s-gray font-light mb-2">
            Liqudation Range
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="text-sm">0.00 - 0.00</div>
        </div>
        <div className="bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="capitalize  text-s-gray font-light mb-2">
            Borrow Rate
            <span
              className=""
              style={{
                backgroundImage: `url('images/info.png')`,
                height: "fill",
              }}
            ></span>
          </div>
          <div className="text-sm">0.00%</div>
        </div>
      </div>
      <div className=" grid grid-cols-5 rounded-2xl gap-4 ">
        <div className="hidden md:block  bg-[#101217] md:col-span-3  rounded-2xl  px-8 py-6">
          <div className="text-2xl mb-8">
            Increase your wstETH holdings by staking in high yield farms.
          </div>
          <div className="text-s-gray mb-8 ">
            Lorem ipsum dolor sit amet consectetur. Nibh phasellus gravida
            lectus et sit suscipit. Quam nisl dis in orci ac adipiscing viverra
            amet. Mi curabitur ornare rutrum bibendum commodo phasellus. Ut id
            vel arcu at ut molestie. Erat fringilla enim at et non ut arcu
            sagittis. Tortor arcu at elit ac scelerisque pulvinar.
          </div>
          <div className="text-s-gray ">
            Tempor blandit bibendum et libero imperdiet tincidunt nunc curabitur
            odio. Pulvinar lacus ac convallis lacus eget. Facilisis sed semper
            dui vel mauris hendrerit sit. Platea aliquet nunc amet tempor ipsum
            malesuada. In dis venenatis eu bibendum eu faucibus aliquet
            imperdiet sodales. Vulputate gravida a pellentesque neque.{" "}
          </div>
        </div>

        {/* tab menu */}
        <Tabs
          defaultValue="staking"
          className="w-full bg-[#101218]  lg:col-span-2 sm:col-span-5 lg:h-[35vh] rounded-2xl  flex-col gap-10 "
        >
          <TabsList className="grid w-full grid-cols-2 bg-[#101218] ">
            <TabsTrigger value="staking" className="text-2xl py-2">
              Staking
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="text-2xl py-2">
              Withdraw
            </TabsTrigger>
          </TabsList>
          <TabsContent value="staking">
            <div className="px-10 py-8 flex-col  ">
              <div className="flex gap-7 justify-center my-8 ">
                <div className="flex border border-[#1A1D23] w-full justify-between p-2 rounded-md">
                  <div className="pl-3 pr-8 text-[#8C9096]">WSTETH</div>
                  <span className="text-[#8C9096]">|</span>
                  <div>
                    <input
                      className="bg-[#101218] focus:bg-none focus:outline-0 text-right"
                      placeholder="1.5"
                    />
                  </div>
                </div>
                <div className="flex gap-3 text-sm items-center pr-5 ">
                  <span>Available</span>
                  <span>1.5</span>
                </div>
              </div>
              <Button className="w-full text-[1.15rem]  rounded-full px-2 py-6 bg-gradient-to-br from-[#BAC6EF] via-[#65ABE9] to-[#8BF2E8] text-black">
                Stake
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="withdraw">
            <div className="bg-[#101218] px-10 py-8 flex-col">
              <div className="flex border border-[#1A1D23] w-full justify-between p-2 rounded-md mb-4">
                <div className="pl-3 pr-8 capitalize text-[#8C9096]">
                  CLAIMABLE REWARDS
                </div>
                <div>
                  <input
                    className="bg-[#101218] focus:bg-none focus:outline-0 text-right pr-2"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex border border-[#1A1D23] w-full justify-between p-2 rounded-md mb-8">
                <div className="pl-3 pr-8 capitalize text-[#8C9096]">
                  TOTAL DEPOSITS
                </div>

                <div>
                  <input
                    className="bg-[#101218] focus:bg-none focus:outline-0 text-right pr-2"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <Button className="w-full text-[1.15rem] rounded-full px-2 py-6 bg-gradient-to-br from-[#BAC6EF] via-[#65ABE9] to-[#8BF2E8] text-black">
                Withdraw
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-col flex bg-[#101217] rounded-2xl px-4 py-5 mb-5 justify-center items-center">
        <div className=" gap-8 flex justify-between w-[95%] items-center ">
          <div>
            <div className="text-[1.3rem]">Liquidation range </div>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <div>CURRENT BALANCE (EST) / DEPOSITED </div>
              <div className="text-right">
                <span>3.51835</span> <span>/</span> <span>3.51835 </span>
              </div>
            </div>
            <div>
              <div>LOSS AMOUNT</div>
              <div className="text-right">0</div>
            </div>
            <div>
              <div>%LOSS</div>
              <div className="text-right">0</div>
            </div>
          </div>
        </div>
        {/* graph */}
        {/* pattern */}

        {/* left: progress %  */}
        <div className=" w-[95%] flex-col mt-20 relative ">
          <Progress value={progress} className="w-[100%]" />
          <div className="absolute  w-2 h-8 bg-white  bottom-0 right-[34%]"></div>
          <div className="absolute bottom-[-1.65rem] items-center right-[33%] ">
            Oracle
          </div>
          {/* portion */}
          <div className="absolute w-24 h-8 bottom-[0.1rem] left-[47%] bg-gray-50"></div>
        </div>

        <div className="flex justify-between text-sm w-[95%] ">
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
        </div>
        <div className="flex justify-between text-sm w-[98.5%] mt-2 ">
          <div className="flex-cols">
            <div>USD $0</div>
          </div>
          <div className="flex-cols">
            <div>USD $500</div>
          </div>
          <div className="flex-cols">
            <div>USD $900</div>
          </div>
          <div className="flex-cols">
            <div>USD $1350</div>
          </div>
          <div className="flex-cols">
            <div>USD $1750</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
