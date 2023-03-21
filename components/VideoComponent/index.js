import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import Image from "next/image";
import ComingSoon from "../ComingSoon";

export default function VideoComponent({ url, cover }) {
  if (url === null) {
    return (
      <>
        <Image src={cover} alt="cover" width={200} height={300} />
        <ComingSoon />
      </>
    );
  }
  if (url.includes("players.brightcove.net")) {
    return (
      <>
        <iframe
          src={url}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </>
    );
  }
  if (!url.includes("players.brightcove.net")) {
    return (
      <>
        <ReactPlayer url={url} width="100%" height="auto" controls={true} />;
      </>
    );
  }
}
