import { Link } from "react-router-dom";

export function MovieCard({ id, image, name }) {
  return (
    <Link to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={name}
        className="hover:scale-105 transition-transform"
      />
    </Link>
  );
}
