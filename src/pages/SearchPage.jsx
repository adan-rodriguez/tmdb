import MovieCard from "../components/MovieCard";
import { useGetMoviesBySearch } from "../hooks/useGetMoviesBySearch";

export default function GenderPage() {
  const { query, movies, isLoading } = useGetMoviesBySearch();

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h1>Results for &quot;{query}&quot;</h1>
          <div className="grid grid-cols-custom">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
