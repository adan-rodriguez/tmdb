import { Card } from "../components/Card";
import { useGetMovies } from "../hooks/useGetMovies";

export function PopularMoviesPage() {
  const { movies } = useGetMovies("popular");

  return (
    <div className="p-5">
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} linkCard="movies" />
        ))}
      </div>
    </div>
  );
}
