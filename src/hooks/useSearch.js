import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchData } from "../services/search";
import { search_type } from "../utils/search_type";

export function useSearch(type) {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const { query, page } = useParams();

  const obtainData = async () => {
    const { data, pages } = await searchData(search_type[type], query, page);
    setData(data);
    setPages(pages);
  };

  useEffect(() => {
    obtainData();
  }, [query, page]);

  return { query, data, pages };
}
