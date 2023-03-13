import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/discover";
import genres from "../utils/genres.json";

export default function useGetMoviesByGender() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { genderId } = useParams();

  const gender = genres.find((gender) => gender.id == genderId).name;

  const obtainMovies = async () => {
    setIsLoading(true);
    const movies = await getMovies(genderId);
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    obtainMovies();
  }, []);

  return { gender, movies, isLoading };
}
