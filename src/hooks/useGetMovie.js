import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";

export default function useGetMovie() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const obtainMovie = async () => {
    const movie = await getMovie(movieId);
    setMovie(movie);
  };

  useEffect(() => {
    obtainMovie();
  }, []);

  return { ...movie };
}
