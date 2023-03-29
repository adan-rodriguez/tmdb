import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShows } from "../services/tv_shows";

export function useGetTvShows(type) {
  const [tvShows, setTvShows] = useState([]);
  const [pages, setPages] = useState(0);
  const { page } = useParams();

  const obtainTvShows = async () => {
    const { tvShows, pages } = await getTvShows(type, page);
    setTvShows(tvShows);
    setPages(pages);
  };

  useEffect(() => {
    obtainTvShows();
  }, [page]);

  return { tvShows, pages };
}
