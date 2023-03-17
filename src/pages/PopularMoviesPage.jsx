import { MovieCard } from "../components/MovieCard";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { movies } = useGetMovies("popular");

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
