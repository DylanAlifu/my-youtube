import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-80 h-80 shadow-lg flex flex-col justify-between hover:bg-gray-200">
      <div>
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg w-full"
        />
        <p className="font-bold py-2 text-ellipsis line-clamp-2 max-h-14">
          {title}
        </p>
      </div>
      <ul>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
