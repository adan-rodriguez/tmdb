import { Grid } from "../components/Grid";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { isLoading, isError, movies, fetchNextPage, hasNextPage } =
    useGetMovies({ topic: "popular" });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <Grid
          data={movies}
          title="Popular movies"
          type="movies"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
