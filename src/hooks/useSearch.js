import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchData } from "../services/search";
import { search_type } from "../utils/search_type";

export function useSearch(type) {
  const [data, setData] = useState({});
  const { query, page } = useParams();

  const obtainMovies = async () => {
    const data = await searchData(search_type[type], query, page);
    setData(data);
  };

  useEffect(() => {
    obtainMovies();
  }, [query, page]);

  return { query, ...data };
}
