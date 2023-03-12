import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title, description }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </Link>
    </li>
  );
}
