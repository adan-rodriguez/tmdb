import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";

export function MoviesSection({ section, link, movies }) {
  return (
    <section className="overflow-hidden">
      <Link to={`/${link}`}>
        <h2>{section}</h2>
      </Link>
      <div className="probando">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
