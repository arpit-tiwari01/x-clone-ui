import Link from "next/link";
import Image from "./Image";

const PopularTag = () => {
  return (
    <div className="p-4 rounded-xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's "}Happening
      </h1>
      {/* TREND EVENT*/}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/event.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-textGrayLight">
            Tokyo Olympics: India men&apos;s hockey team look to bounce back
            against Spain
          </h1>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* TREND */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology . Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h1 className="font-bold text-textGrayLight">Tokyo Olympics: India</h1>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TREND */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology . Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h1 className="font-bold text-textGrayLight">Tokyo Olympics: India</h1>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TREND */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology . Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h1 className="font-bold text-textGrayLight">Tokyo Olympics: India</h1>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TREND */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology . Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h1 className="font-bold text-textGrayLight">Tokyo Olympics: India</h1>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      <Link href="/explore" className="text-iconBlue text-sm font-bold">
        Show more
      </Link>
    </div>
  );
};

export default PopularTag;
