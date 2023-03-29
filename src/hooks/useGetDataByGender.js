import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/discover";
import moviesGenres from "../utils/moviesGenres.json";
import tvGenres from "../utils/tvGenres.json";

export function useGetDataByGender(type) {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const { genderName, page } = useParams();

  const obtainData = async () => {
    if (type === "movie") {
      const genderId = moviesGenres.find(
        (gender) => gender.name.toLowerCase() === genderName.replace(/-/g, " ")
      ).id;
      const { data, pages } = await getData(type, genderId, page);
      setData(data);
      setPages(pages);
    }

    if (type === "tv") {
      const genderId = tvGenres.find(
        (gender) => gender.name.toLowerCase() === genderName.replace(/-/g, " ")
      ).id;
      const { data, pages } = await getData(type, genderId, page);
      setData(data);
      setPages(pages);
    }
  };

  useEffect(() => {
    obtainData();
  }, [page]);

  return {
    gender: genderName,
    data,
    pages,
  };
}
