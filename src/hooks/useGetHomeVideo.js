import { useEffect, useState } from "react";
import { getVideos } from "../services/videos";

export function useGetHomeVideo(movieId) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const officialTrailerId = videos?.find(
    (video) => video.official && video.type === "Trailer"
  )?.id;

  const obtainVideos = async () => {
    const videos = await getVideos(movieId);
    setVideos(videos);
  };

  useEffect(() => {
    setIsLoading(true);
    obtainVideos().then(() => setIsLoading(false));
  }, [movieId]);

  return { officialTrailerId, isLoading };
}
