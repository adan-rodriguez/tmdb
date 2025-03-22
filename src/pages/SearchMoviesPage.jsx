import { useParams } from "react-router-dom";
import { Grid } from "../components/Grid";
import { useSearch } from "../hooks/useSearch";

export function SearchMoviesPage() {
  const { query } = useParams();
  const { isLoading, isError, data, fetchNextPage, hasNextPage } = useSearch({
    type: "movie",
    query,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <Grid
      data={data}
      title="Movies"
      type="movies"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </Grid>
  );
}
