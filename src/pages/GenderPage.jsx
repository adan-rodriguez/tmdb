import MovieCard from "../components/MovieCard";
import useGetMoviesByGender from "../hooks/useGetMoviesByGender";

export default function GenderPage() {
  const { gender, movies } = useGetMoviesByGender();

  return (
    <>
      <h1>{gender}</h1>
      <div className="grid grid-cols-custom">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
