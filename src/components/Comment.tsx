import Image from "./Image";

export const Comment = () => {
  return (
    <div>
      <form className="flex item-center justify-between gap-4 p-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
          placeholder="Add a comment..."
        />
        <button className="py-2 px-4 text-black bg-white font-bold rounded-full">
          Reply
        </button>
      </form>
    </div>
  );
};
