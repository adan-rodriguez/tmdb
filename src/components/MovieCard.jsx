import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title }) {
  return (
    <Link to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        className="hover:scale-105 transition-transform"
      />
    </Link>
  );
}
