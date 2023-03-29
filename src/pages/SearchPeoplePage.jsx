import { ListGrid } from "../components/ListGrid";
import { useSearch } from "../hooks/useSearch";

export function SearchPeoplePage() {
  const { query, data, pages } = useSearch("people");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle="People"
      linkCard="people"
      linkPagination={`search/people/${query}`}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </ListGrid>
  );
}
