import { useEffect, useState } from "react";
import { getPeople } from "../services/people";

export function useGetPeople() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const obtainPeople = async () => {
    setIsLoading(true);
    const people = await getPeople();
    setPeople(people);
    setIsLoading(false);
  };

  useEffect(() => {
    obtainPeople();
  }, []);

  return { people, isLoading };
}
