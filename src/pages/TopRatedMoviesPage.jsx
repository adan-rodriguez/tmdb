import { ListGrid } from "../components/ListGrid";
import { useGetMovies } from "../hooks/useGetMovies";

export function TopRatedMoviesPage() {
  const { pages, movies } = useGetMovies("top_rated");

  return (
    <ListGrid
      data={movies}
      pages={pages}
      pageTitle="Top rated movies"
      linkCard="movies"
      linkPagination="movies/top_rated"
    />
  );
}
