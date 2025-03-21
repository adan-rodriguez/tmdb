import { Grid } from "../components/Grid";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function PopularTvShowsPage() {
  const { isLoading, isError, tvShows, fetchNextPage, hasNextPage } =
    useGetTvShows({ topic: "popular" });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <Grid
          data={tvShows}
          title="Popular Tv Shows"
          type="tv"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
