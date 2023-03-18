import { Card } from "../components/Card";
import { useGetMovies } from "../hooks/useGetMovies";

export function TopRatedMoviesPage() {
  const { movies } = useGetMovies("top_rated");

  return (
    <>
      <h1>Top Rated Movies</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} linkCard="movies" />
        ))}
      </div>
    </>
  );
}
