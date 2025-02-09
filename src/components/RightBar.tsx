import Link from "next/link";
import PopularTag from "./PopularTag";
import Recommendation from "./Recommendation";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTag />
      <Recommendation />
      <div className="text text-textGray text-sm flex flex-wrap gap-x-4">
        <Link href="/">Term and services</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookies Policy</Link>
        <Link href="/">Assecibility</Link>
        <Link href="/">Ad Info</Link>
        <span> 2025 X cop.</span>
      </div>
    </div>
  );
};

export default RightBar;
