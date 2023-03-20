import { ListGrid } from "../components/ListGrid";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { pages, movies } = useGetMovies("popular");

  return (
    <ListGrid
      data={movies}
      pages={pages}
      pageTitle="Popular movies"
      linkCard="movies"
      linkPagination="movies/popular"
    />
  );
}
