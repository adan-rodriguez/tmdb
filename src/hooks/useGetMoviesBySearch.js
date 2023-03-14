import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/search";

export function useGetMoviesBySearch() {
  const [movies, setMovies] = useState([]);
  const { query } = useParams();

  const obtainMovies = async () => {
    const movies = await getMovies(query);
    setMovies(movies);
  };

  useEffect(() => {
    obtainMovies();
  }, [query]);

  return { query, movies };
}
