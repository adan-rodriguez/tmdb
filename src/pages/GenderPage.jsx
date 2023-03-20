import { ListGrid } from "../components/ListGrid";
import { useGetMoviesByGender } from "../hooks/useGetMoviesByGender";

export function GenderPage() {
  const { gender, movies, pages } = useGetMoviesByGender();

  return (
    <ListGrid
      data={movies}
      pages={pages}
      pageTitle={gender}
      linkCard="movies"
      linkPagination={`genres/${gender}`}
    />
  );
}
