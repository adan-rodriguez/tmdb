import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShows } from "../services/tv_shows";

export function useGetTvShows(type) {
  const [tvShows, setTvShows] = useState({});
  const { page } = useParams();

  const obtainTvShows = async () => {
    const tvShows = await getTvShows(type, page);
    setTvShows(tvShows);
  };

  useEffect(() => {
    obtainTvShows();
  }, [page]);

  return { ...tvShows };
}
