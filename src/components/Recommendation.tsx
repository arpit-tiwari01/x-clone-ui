import Link from "next/link";
import React from "react";
import Image from "./Image";

const Recommendation = () => {
  return (
    <div className="p-4 rounded-xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
            ></Image>
          </div>
          <div className="">
            <h1 className="text-base">Virat Kohli</h1>
            <span className="text-textGray text-sm">@vkohli</span>
          </div>
        </div>
        {/* FOLLOW BUTTON */}
        <button className="py-1 px-4 text-black bg-white font-semibold rounded-full">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
            ></Image>
          </div>
          <div className="">
            <h1 className="text-base">Virat Kohli</h1>
            <span className="text-textGray text-sm">@vkohli</span>
          </div>
        </div>
        {/* FOLLOW BUTTON */}
        <button className="py-1 px-4 text-black bg-white font-semibold rounded-full">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
            ></Image>
          </div>
          <div className="">
            <h1 className="text-base">Virat Kohli</h1>
            <span className="text-textGray text-sm">@vkohli</span>
          </div>
        </div>
        {/* FOLLOW BUTTON */}
        <button className="py-1 px-4 text-black bg-white font-semibold rounded-full">
          Follow
        </button>
      </div>
      <Link href="/explore" className="text-iconBlue text-sm font-bold">
        Show more
      </Link>
    </div>
  );
};

export default Recommendation;
