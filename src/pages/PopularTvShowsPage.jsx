import { Grid } from "../components/Grid";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function PopularTvShowsPage() {
  const { isLoading, isError, tvShows, fetchNextPage, hasNextPage } =
    useGetTvShows({ topic: "popular" });

  if (isError) return <p>Error</p>;

  return (
    <Grid
      data={tvShows}
      title="Popular Tv Shows"
      type="tv"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
}
