import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../services/people";

export function useGetPerson() {
  const [person, setPerson] = useState({});
  const { personId } = useParams();

  useEffect(() => {
    const obtainPerson = async () => {
      const movie = await getPerson(personId);
      setPerson(movie);
    };
    obtainPerson();
  }, []);

  return { ...person };
}
