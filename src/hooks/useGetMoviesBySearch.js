import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/search";

export function useGetMoviesBySearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useParams();

  const obtainMovies = async () => {
    setIsLoading(true);
    const movies = await getMovies(query);
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    obtainMovies();
  }, [query]);

  return { query, movies, isLoading };
}
