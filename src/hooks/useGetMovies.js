import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/movies";

export function useGetMovies(type) {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const { page } = useParams();

  const obtainMovies = async () => {
    const { movies, pages } = await getMovies(type, page);
    setMovies(movies);
    setPages(pages);
  };

  useEffect(() => {
    obtainMovies();
  }, [page]);

  return { movies, pages };
}
