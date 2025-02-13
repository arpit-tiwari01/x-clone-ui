import { Comment } from "@/components/Comment";
import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";

const StatusPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 p-4 z-10 backdrop-blur-md bg-black bg-opacity-50">
        <Link href="/">
          <Image path="icons/back.svg" alt="back icon" w={24} h={24} />
        </Link>
        <h1 className="text-lg font-bold">Post</h1>
      </div>
      <Post type="status" />
      <Comment />
    </div>
  );
};

export default StatusPage;
