import { useGetMoviesByGender } from "@/hooks/useGetMoviesByGender";
import { Grid } from "../components/Grid";
import { useParams } from "react-router-dom";
import moviesGenres from "@/utils/moviesGenres.json";

export function MoviesByGenderPage() {
  const { id } = useParams();
  const { isLoading, isError, movies, fetchNextPage, hasNextPage } =
    useGetMoviesByGender({ id });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  const movieGender = moviesGenres.find(
    (movieGender) => movieGender.id == id
  ).name;

  return (
    <Grid
      data={movies}
      title={`Movies | ${movieGender}`}
      type="movies"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
