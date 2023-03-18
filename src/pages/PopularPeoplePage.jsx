import { ListGrid } from "../components/ListGrid";
import { useGetPeople } from "../hooks/useGetPeople";

export function PopularPeoplePage() {
  const { people } = useGetPeople();

  return (
    <ListGrid data={people} pageTitle={"Popular people"} linkCard={"people"} />
  );
}
