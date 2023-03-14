import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

export function useGetMovies(q) {
  const [movies, setMovies] = useState([]);

  const obtainMovies = async () => {
    const movies = await getMovies(q);
    setMovies(movies);
  };

  useEffect(() => {
    obtainMovies();
  }, []);

  return { movies };
}
