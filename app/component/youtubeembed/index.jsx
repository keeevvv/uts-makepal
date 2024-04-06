import React from "react";
import YouTube from "react-youtube";

const YouTubeEmbed = ({ id }) => {
  const opts = {
    height: "auto", // Allow automatic height based on aspect ratio
    width: "100%", // Fill container width
    playerVars: {
      autoplay: 0, // Enable autoplay if desired
    },
  };

  return (
    <div className="aspect-w-16 aspect-h-9 md:py-10 pt-3">
      <YouTube videoId={id} opts={opts} />
    </div>
  );
};

export default YouTubeEmbed;
