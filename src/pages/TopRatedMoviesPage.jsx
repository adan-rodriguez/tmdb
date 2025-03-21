import { Grid } from "../components/Grid";
import { useGetMovies } from "../hooks/useGetMovies";

export function TopRatedMoviesPage() {
  const { isLoading, isError, movies, fetchNextPage, hasNextPage } =
    useGetMovies({ topic: "top_rated" });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <Grid
          data={movies}
          title="Top rated movies"
          type="movies"
          topic="top_rated"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
