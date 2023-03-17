import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShow } from "../services/tv_shows";

export function useGetTvShow() {
  const [tvShow, setTvShow] = useState({});
  const { tvShowId } = useParams();

  const obtainTvShow = async () => {
    const tvShow = await getTvShow(tvShowId);
    setTvShow(tvShow);
  };

  useEffect(() => {
    obtainTvShow();
  }, []);

  return { ...tvShow };
}
