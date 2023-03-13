import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

export function useGetMovies(q) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const obtainMovies = async () => {
    setIsLoading(true);
    const movies = await getMovies(q);
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    obtainMovies();
  }, []);

  return { movies, isLoading };
}
