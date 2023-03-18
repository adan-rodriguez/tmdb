import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchData } from "../services/search";
import { search_type } from "../utils/search_type";

export function useSearch() {
  const [data, setData] = useState([]);
  const { type, query } = useParams();

  const obtainMovies = async () => {
    const data = await searchData(search_type[type], query);
    setData(data);
  };

  useEffect(() => {
    obtainMovies();
  }, [query]);

  return { type, query, data };
}