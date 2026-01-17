import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
export default function Hero() {
  return (
    <div className="h-screen text-white">
      <div className="absolute inset-0 bg-black">
        <Image
          src={"/cap1.png"}
          height={1500}
          width={1500}
          alt="hero"
          className="h-screen w-screen object-cover p-3 rounded-4xl"
        />
      </div>

      <div className="relative flex flex-col justify-between min-h-screen ">
        <div className="flex justify-between mt-2 pr-5">
          <h1 className=" text-[170px]  px-8 font-bold flex gap-2 items-center ">
            Capsules{" "}
            <span className="size-12 mt-15 justify-center items-center rounded-full border-5  flex text-3xl">
              R
            </span>
          </h1>
          <button className="inline-flex items-center rounded-full h-fit px-3 py-3 mt-8 text-black text-[20px] bg-gray-100 gap-5 hover:bg-white">
            Reserve{" "}
            <span>
              <Icon
                icon={"mingcute:arrow-right-up-line"}
                className="w-10 h-10 bg-black rounded-full text-gray-500 "
              ></Icon>
            </span>
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="pb-3 mb-3 ml-5  px-5 text-4xl max-w-md">
              Closer to Nature - Closer to Yourself
            </h1>
          </div>
          <div className="mr-5 max-w-md pr-8">
            <h4>
              spend unforgettable and remarkable time in the California desert
              with - Capsules{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
