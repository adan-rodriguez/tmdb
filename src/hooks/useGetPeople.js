import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPeople } from "../services/people";

export function useGetPeople() {
  const [people, setPeople] = useState([]);
  const { page } = useParams();

  const obtainPeople = async () => {
    const people = await getPeople(page);
    setPeople(people);
  };

  useEffect(() => {
    obtainPeople();
  }, [page]);

  return { people };
}
