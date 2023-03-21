import { ListGrid } from "../components/ListGrid";
import { useSearch } from "../hooks/useSearch";

export function SearchTvShowsPage() {
  const { query, data = [], pages } = useSearch("tv_shows");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle="Tv Shows"
      linkCard="tv_shows"
      linkPagination={`search/tv_shows/${query}`}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </ListGrid>
  );
}
