import MovieCard from "./MovieCard";

export default function MoviesSection({ section, movies, isLoading }) {
  return (
    <section className="overflow-hidden">
      <h2>{section}</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        // <ul className="grid grid-cols-custom gap-2">
        <div className="probando">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </section>
  );
}
