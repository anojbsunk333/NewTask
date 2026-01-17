import Image from "next/image";

export default function Second() {
  return (
    <div className=" m-5 p-2">
      <div className="mt-10 pt-10">
        <h2 className="text-[#f4efe7] text-[50px] mr-40 pr-20 leading-none ">
          Welcome to a world of wild CaliforniaWelcome to a world of wild
          California desert with Capsules®, where you will desert with Capsules®,
          where you will discover exquisite nature observing it discover
          exquisite nature observing it from capsule houses, nestled in the from
          capsule houses, nestled in the one of the most breath taking one of the
          most breathtaking destination on the United States.
        </h2>
      </div>

      <div className="grid grid-cols-5 min-h-50 gap-16 items-center mt-28">
        <div className="col-span-2 grid grid-cols-2">
          <div className="w-full aspect-video rounded-full">
            <Image
              src={"/welcome.png"}
              height={300}
              width={300}
              alt="couple"
              className="rounded-full"
            />
          </div>
          <div className="w-full aspect-video rounded-full">
            <Image
              src={"/welcome2.png"}
              height={300}
              width={300}
              alt="couple"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="col-span-3">
          <h2 className="text-[#a19789] text-[38px]">
            Welcome Image 2 A place where you can be with yourself and your
            loved ones. A place where you can experience unforgettable desert
            things.
          </h2>
        </div>
      </div>
    </div>
  );
}
