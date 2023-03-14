import { useEffect, useState } from "react";
import { getPeople } from "../services/people";

export function useGetPeople() {
  const [people, setPeople] = useState([]);

  const obtainPeople = async () => {
    const people = await getPeople();
    setPeople(people);
  };

  useEffect(() => {
    obtainPeople();
  }, []);

  return { people };
}
