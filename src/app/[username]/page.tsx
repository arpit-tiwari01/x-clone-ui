import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 p-4 z-10 backdrop-blur-md bg-black bg-opacity-50">
        <Link href="/">
          <Image path="icons/back.svg" alt="back icon" w={24} h={24} />
        </Link>
        <h1 className="text-lg font-bold">Profile</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER AND AVATAR CONTAINER */}
        <div className="relative w-full ">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              path="general/newCover.png"
              alt=""
              w={600}
              h={200}
              tr={true}
            ></Image>
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
            ></Image>
          </div>
        </div>
        {/* USER INFO */}
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex item-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="user icon" w={24} h={24} />
          </div>
          <div className="w-9 h-9 flex item-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="user icon" w={24} h={24} />
          </div>
          <div className="w-9 h-9 flex item-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="user icon" w={24} h={24} />
          </div>
          <button className="py-2 px-4 bg-white rounded-full text-black font-bold ">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2 ">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1>Arpit Tiwari</h1>
            <span className="text-textGray text-sm">@atDev</span>
          </div>
          {/* BIO */}
          <p>Web dev | Next.js |tailwind.css | motion | Node.js | Mongo.db</p>
          {/* JOB AND LOCATION */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex gap-2 items-center">
              <Image
                path="icons/userLocation.svg"
                alt="location icon"
                w={24}
                h={24}
              />
              <span>India</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image path="icons/date.svg" alt="location icon" w={24} h={24} />
              <span>Joined may 2021</span>
            </div>
          </div>
          {/* FOLLOWERS  and FOLLOWING*/}
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]"> Followers</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-bold">345</span>
              <span className="text-textGray text-[15px]"> Following</span>
            </div>
          </div>
        </div>
        {/* FEED */}
        <Feed />
      </div>
    </div>
  );
};

export default Page;
