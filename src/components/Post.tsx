import { imagekit } from "@/utils";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileID: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileID, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  // const fileDetails = await getFileDetails("679d9c05432c4764160b05c2");679db9ca432c4764169cf1c9
  // const fileDetails = await getFileDetails("679db9ca432c4764169cf1c9");
  // console.log(fileDetails);

  // videoId - 67a499b6432c4764165e0528
  const fileDetails = await getFileDetails("67a499b6432c4764165e0528");
  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex item-center gap-2 text-sm font-bold text-textGray mb-2">
        {/* POST TYPE */}
        icon
        <span>Arpit tiwari </span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr={true}
          ></Image>
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex item-center gap-2 flex-wrap">
              <h1 className="font-bold text">Arpit tiwari</h1>
              <span className="text-textGray">@arpit</span>
              <span className="text-textGray"> - 1h</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            similique cumque corrupti magni sapiente voluptatibus natus
            eligendi, amet deleniti labore.
          </p>
          {/* <Image
            path="general/post.jpeg"
            alt="avatar"
            w={600}
            h={600}
            className="rounded-2xl"
          ></Image> */}
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            ></Image>
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
