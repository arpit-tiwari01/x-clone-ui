import Image from "./Image";

const Search = () => {
  return (
    <div className="bg-inputGray px-4 py-2 flex items-center rounded-full gap-4">
      <Image path="icons/explore.svg" alt="search" w={16} h={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray "
      />
    </div>
  );
};

export default Search;
