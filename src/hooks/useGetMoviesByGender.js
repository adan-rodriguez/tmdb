import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/discover";
import genres from "../utils/genres.json";

export function useGetMoviesByGender() {
  const [movies, setMovies] = useState([]);
  const { genderId } = useParams();

  const gender = genres.find((gender) => gender.id == genderId).name;

  const obtainMovies = async () => {
    const movies = await getMovies(genderId);
    setMovies(movies);
  };

  useEffect(() => {
    obtainMovies();
  }, []);

  return { gender, movies };
}
