import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPeople } from "../services/people";

export function useGetPeople() {
  const [people, setPeople] = useState([]);
  const [pages, setPages] = useState(0);
  const { page } = useParams();

  const obtainPeople = async () => {
    const { people, pages } = await getPeople(page);
    setPeople(people);
    setPages(pages);
  };

  useEffect(() => {
    obtainPeople();
  }, [page]);

  return { people, pages };
}
