import { Card } from "../components/Card";
import { useGetMoviesByGender } from "../hooks/useGetMoviesByGender";

export function GenderPage() {
  const { gender, movies } = useGetMoviesByGender();

  return (
    <>
      <h1>{gender}</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} linkCard="movies" />
        ))}
      </div>
    </>
  );
}
