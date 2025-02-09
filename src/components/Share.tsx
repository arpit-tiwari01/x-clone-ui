"use client";

import { useEffect, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({ type: "original", sensitive: false });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  // Generate preview URL only when media changes
  useEffect(() => {
    if (media) {
      const objectURL = URL.createObjectURL(media);
      setPreviewURL(objectURL);

      return () => {
        URL.revokeObjectURL(objectURL);
        console.log("mission cleanup");
      };
    }
  }, [media]);

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
      </div>

      {/* OTHER */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="what is happening?!.."
          className="bg-transparent outline-none placeholder-textGray text-xl"
        />

        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : " aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white font-bold text-sm px-4 py-1 rounded-full cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white font-bold text-sm h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => setMedia(null)}
            >
              x
            </div>
          </div>
        )}
        {
          // PREVIEW VIDEO
          media?.type.includes("video") && previewURL && (
            <div className="relative">
              <video
                src={previewURL}
                controls
                className="w-full rounded-xl"
                // className={`w-full rounded-xl ${
                //   settings.type === "original"
                //     ? "h-full object-contain"
                //     : settings.type === "square"
                //     ? "aspect-square object-cover"
                //     : " aspect-video object-cover"
                // }`}
              ></video>
              <div
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white font-bold text-sm h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
                onClick={() => setMedia(null)}
              >
                x
              </div>
            </div>
          )
        }

        {/* IMAGE EDITOR */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="relative flex gap-2">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full px-4 py-2">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
