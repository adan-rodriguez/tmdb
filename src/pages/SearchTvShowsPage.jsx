import { Grid } from "../components/Grid";
import { useSearch } from "../hooks/useSearch";

export function SearchTvShowsPage() {
  const { query, data } = useSearch("tv");

  return (
    <Grid data={data} title="Tv Shows" type="tv">
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </Grid>
  );
}
