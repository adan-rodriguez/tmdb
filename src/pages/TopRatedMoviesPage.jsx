import { MovieCard } from "../components/MovieCard";
import { useGetMovies } from "../hooks/useGetMovies";

export function TopRatedMoviesPage() {
  const { movies } = useGetMovies("top_rated");

  return (
    <>
      <h1>Top Rated Movies</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
