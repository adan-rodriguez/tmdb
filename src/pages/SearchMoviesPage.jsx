import { Grid } from "../components/Grid";
import { useSearch } from "../hooks/useSearch";

export function SearchMoviesPage() {
  const { query, data, pages } = useSearch("movies");

  return (
    <Grid
      data={data}
      pages={pages}
      title="Movies"
      type="movies"
      topic={`search/movies/${query}`}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </Grid>
  );
}
