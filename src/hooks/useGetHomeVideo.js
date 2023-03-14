import { useEffect, useState } from "react";
import { getVideos } from "../services/videos";

export function useGetHomeVideo(movieId) {
  const [videos, setVideos] = useState([]);
  const [officialTrailerId, setOfficialTrailerId] = useState("");

  const obtainOfficialTrailerId = () =>
    setOfficialTrailerId(
      videos?.find((video) => video.official && video.type === "Trailer")?.id
    );

  const obtainVideos = async () => {
    const videos = await getVideos(movieId);
    setVideos(videos);
  };

  useEffect(() => {
    obtainVideos();
  }, [movieId]);

  useEffect(() => {
    obtainOfficialTrailerId();
  }, [videos]);

  return { officialTrailerId };
}
