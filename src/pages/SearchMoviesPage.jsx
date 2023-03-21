import { ListGrid } from "../components/ListGrid";
import { useSearch } from "../hooks/useSearch";

export function SearchMoviesPage() {
  const { query, data = [], pages } = useSearch("movies");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle="Movies"
      linkCard="movies"
      linkPagination={`search/movies/${query}`}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </ListGrid>
  );
}
