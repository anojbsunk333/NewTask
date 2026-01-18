export default function Third(){
    return (
      <div className="bg-[#1f1d1c] h-screen  ">
        <h1 className="text-[164px] text-[#f4efe7] m-4 p-8 leading-none">
          Choose the one you like best
        </h1>
        <div className="grid grid-cols-2  ml-5">
          <div className="text-[#b1a696] text-[30px] mt-5 px-10">
            You can choose one of three premium capsule houses in our offer.
            Each of our capsules provides the highest quality and meets the
            standards adjusted to your needs. Choose the one you like.
          </div>
          <div>
            <h4 className="text-white ml-5">
              All Capsules@ houses-has built based on the same rules:
            </h4>
            <div className="mt-4 space-x-2 space-y-3">
              <button className="rounded-full border-[#a3998a] text-[#a49a8b] border-2 px-8 py-2 text-[38px] ">
                Sustainable
              </button>
              <button className="rounded-full border-[#f4efe7] text-[#f4efe7] border-2 px-8 py-2 text-[38px]">
                Nature-Care
              </button>
              <button className="rounded-full border-[#a3998a] text-[#a49a8b] border-2 px-8 py-2 text-[38px]">
                Smart
              </button>
              <button className="rounded-full border-[#f4efe7] text-[#f4efe7] border-2 px-8 py-2 text-[38px]">
                Privacy
              </button>
              <button className="rounded-full border-[#a3998a] text-[#a49a8b] border-2 px-8 py-2 text-[38px] ">
                Spacious
              </button>
              <button className="rounded-full border-[#f4efe7] text-[#f4efe7] border-2 px-8 py-2 text-[38px]">
                Glassed-in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}