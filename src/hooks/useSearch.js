import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchData } from "../services/search";

export function useSearch(type) {
  const [data, setData] = useState([]);
  const { query } = useParams();

  const obtainMovies = async () => {
    const data = await searchData(type, query);
    setData(data);
  };

  useEffect(() => {
    obtainMovies();
  }, [query]);

  return { query, data };
}
