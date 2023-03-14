import MovieCard from "./MovieCard";

export default function MoviesSection({ section, movies }) {
  return (
    <section className="overflow-hidden">
      <h2>{section}</h2>
      <div className="probando">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
