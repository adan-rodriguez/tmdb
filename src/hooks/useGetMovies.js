import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/movies";

export function useGetMovies(q) {
  const [movies, setMovies] = useState([]);
  const { page } = useParams();

  const obtainMovies = async () => {
    const movies = await getMovies(q, page);
    setMovies(movies);
  };

  useEffect(() => {
    obtainMovies();
  }, [page]);

  return { movies };
}
