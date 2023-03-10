import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

export function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const obtainMovies = async () => {
    setIsLoading(true);
    const movies = await getMovies();
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    obtainMovies();
  }, []);

  return { movies, isLoading };
}
