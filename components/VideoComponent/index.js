import ReactPlayer from "react-player";

export default function VideoComponent({ url }) {
  if (url === null) {
    return (
      <>
        <h2>trailer is coming soon...!</h2>
      </>
    );
  }
  if (url.includes("players.brightcove.net")) {
    return (
      <>
        <iframe
          src={url}
          allow="autoplay; fullscreen; picture-in-picture"
          width="100%"
          height="200px"
        />
      </>
    );
  }
  if (!url.includes("players.brightcove.net")) {
    return (
      <>
        <ReactPlayer url={url} width="100%" height="200px" controls={true} />
      </>
    );
  }
}
