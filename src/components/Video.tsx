"use client";
import { IKImage, IKVideo } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
  path: string;
  className?: string;
};

const Video = ({ path, className }: VideoType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[{ height: "1080", width: "1920", q: "50" }]}
      controls
    />
  );
};

export default Video;
