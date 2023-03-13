import MovieCard from "../components/MovieCard";
import useGetMoviesByGender from "../hooks/useGetMoviesByGender";

export default function GenderPage() {
  const { gender, movies, isLoading } = useGetMoviesByGender();

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h1>{gender}</h1>
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
