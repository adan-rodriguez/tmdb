import { ListGrid } from "../components/ListGrid";
import { useGetPeople } from "../hooks/useGetPeople";

export function PopularPeoplePage() {
  const { people, pages } = useGetPeople();

  return (
    <ListGrid
      data={people}
      pages={pages}
      pageTitle="Popular people"
      linkCard="people"
      linkPagination="people/popular"
    />
  );
}
