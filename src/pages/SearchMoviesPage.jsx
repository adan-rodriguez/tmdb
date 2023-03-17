import { MovieCard } from "../components/MovieCard";
import { useSearch } from "../hooks/useSearch";
import { search_type } from "../utils/search_type";

export function SearchMoviesPage() {
  const { query, data: movies } = useSearch(search_type.movies);

  return (
    <>
      <h1>Results for &quot;{query}&quot;</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
