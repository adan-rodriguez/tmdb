import { Link } from "react-router-dom";

export function Card({ id, image, name, link }) {
  return (
    <Link style={{ minWidth: "200px" }} to={`/${link}/${id}`}>
      <img
        className="hover:scale-105 transition-transform"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={name}
        loading="lazy"
      />
    </Link>
  );
}
