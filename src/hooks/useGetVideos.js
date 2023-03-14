import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../services/videos";

export default function useGetVideos() {
  const [videos, setVideos] = useState([]);
  const { movieId } = useParams();

  const officialTrailerId = videos.find(
    (video) => video.official && video.type === "Trailer"
  )?.id;

  const obtainVideos = async () => {
    const videos = await getVideos(movieId);
    setVideos(videos);
  };

  useEffect(() => {
    obtainVideos();
  }, []);

  return { officialTrailerId };
}
