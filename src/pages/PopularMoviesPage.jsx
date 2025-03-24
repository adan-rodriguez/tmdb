import { Grid } from "../components/Grid";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { isLoading, isError, movies, fetchNextPage, hasNextPage } =
    useGetMovies({ topic: "popular" });

  if (isError) return <p>Error</p>;

  return (
    <Grid
      data={movies}
      title="Popular movies"
      type="movies"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
}
