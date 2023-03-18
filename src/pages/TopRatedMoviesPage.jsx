import { ListGrid } from "../components/ListGrid";
import { useGetMovies } from "../hooks/useGetMovies";

export function TopRatedMoviesPage() {
  const { movies } = useGetMovies("top_rated");

  return (
    <ListGrid
      data={movies}
      pageTitle={"Top rated movies"}
      linkCard={"movies"}
    />
  );
}
