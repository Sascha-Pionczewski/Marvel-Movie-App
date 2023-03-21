import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function VideoComponent({ url }) {
  const isBrightcove = url.includes("players.brightcove.net");

  return (
    <>
      {isBrightcove ? (
        <iframe
          src={url}
          allow="autoplay; fullscreen; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <ReactPlayer url={url} width="100%" height="auto" controls={true} />
      )}
    </>
  );
}
