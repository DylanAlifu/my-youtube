import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.items) {
        setVideos(data.items);
      } else {
        setError("No videos found");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {error ? (
        <p>{error}</p>
      ) : (
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
