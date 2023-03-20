import { ListGrid } from "../components/ListGrid";
import { useSearch } from "../hooks/useSearch";

export function SearchPage() {
  const { type, query, data } = useSearch();

  return (
    <ListGrid
      data={data}
      pageTitle={`${type[0].toUpperCase()}${type.slice(1)}`}
      linkCard={type}
      linkPagination={`search/${type}/${query}`}
    >
      <h2 className="text-lg mb-2">
        Results for <strong>&quot;{query}&quot;</strong>
      </h2>
    </ListGrid>
  );
}
