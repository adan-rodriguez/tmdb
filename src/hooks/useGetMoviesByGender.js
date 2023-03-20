import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/discover";
import genres from "../utils/genres.json";

export function useGetMoviesByGender() {
  const [movies, setMovies] = useState({});
  const { genderName, page } = useParams();

  const genderId = genres.find(
    (gender) => gender.name.toLowerCase() === genderName
  ).id;

  const obtainMovies = async () => {
    const movies = await getMovies(genderId, page);
    setMovies(movies);
  };

  useEffect(() => {
    obtainMovies();
  }, [page]);

  return {
    gender: `${genderName[0].toUpperCase()}${genderName.slice(1)}`,
    ...movies,
  };
}
