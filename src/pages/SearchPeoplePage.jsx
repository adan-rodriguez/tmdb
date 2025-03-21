import { Grid } from "../components/Grid";
import { useSearch } from "../hooks/useSearch";

export function SearchPeoplePage() {
  const { query, data, pages } = useSearch("people");

  return (
    <Grid
      data={data}
      pages={pages}
      title="People"
      type="people"
      topic={`search/people/${query}`}
    >
      <h2 className="text-lg mb-2">
        {data.length === 0 ? "No results " : "Results "} for{" "}
        <strong>&quot;{query}&quot;</strong>
      </h2>
    </Grid>
  );
}
