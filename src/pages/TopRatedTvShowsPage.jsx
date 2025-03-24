import { Grid } from "../components/Grid";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function TopRatedTvShowsPage() {
  const { isLoading, isError, tvShows, fetchNextPage, hasNextPage } =
    useGetTvShows({ topic: "top_rated" });

  if (isError) return <p>Error</p>;

  return (
    <Grid
      data={tvShows}
      title="Top rated Tv Shows"
      type="tv"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
}
