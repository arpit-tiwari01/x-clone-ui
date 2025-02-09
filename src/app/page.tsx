import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="px-4 pt-4 flex items-center justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For you
        </Link>
        <Link href="/" className="pb-3 flex items-center ">
          Following
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          Dev
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          React
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          crypto
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
