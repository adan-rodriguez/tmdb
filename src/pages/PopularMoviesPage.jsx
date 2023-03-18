import { ListGrid } from "../components/ListGrid";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { movies } = useGetMovies("popular");

  return (
    <ListGrid data={movies} pageTitle={"Popular movies"} linkCard={"movies"} />
  );
}
