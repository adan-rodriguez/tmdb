import { Link } from "react-router-dom";

export function Card({ id, image, name, linkCard }) {
  return (
    <Link style={{ minWidth: "200px" }} to={`/${linkCard}/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={name}
        className="hover:scale-105 transition-transform"
      />
    </Link>
  );
}
