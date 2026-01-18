import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function Fourth() {
  return (
    <div className="py-16 bg-[#1f1d1c] h-screen ">
      <div className="abosute inset-0">
        <Marquee speed={200} gradient={false} loop={0}>
          <div className="flex gap-10">
            <p className="text-[#f4efe7] text-[150px] flex font-bold justify-center items-center">
              Capsules <span className="text-[80px] mt-10 ml-3">&reg;</span>
            </p>
            <p className="text-[#f4efe7] text-[150px] flex font-bold justify-center items-center">
              Capsules <span className="text-[80px] mt-10 ml-3">&reg;</span>
            </p>
            <p className="text-[#f4efe7] text-[150px] flex font-bold justify-center items-center">
              Capsules <span className="text-[80px] mt-10 ml-3">&reg;</span>
            </p>
            <p className="text-[#f4efe7] text-[150px] flex font-bold justify-center items-center">
              Capsules <span className="text-[80px] mt-10 ml-3">&reg;</span>
            </p>
          </div>
        </Marquee>
        <div className="relative">
          <Image
            src={"/cap3.png"}
            height={1500}
            width={1500}
            alt="hero"
            className="h-screen w-screen object-cover p-3 rounded-4xl"
          />
        </div>
      </div>
     
    </div>
  );
}
