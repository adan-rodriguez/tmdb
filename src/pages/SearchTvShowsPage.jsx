import { Link } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { search_type } from "../utils/search_type";

export function SearchTvShowsPage() {
  const { query, data: tv_shows } = useSearch(search_type.tv_shows);

  return (
    <div className="p-5">
      <h1>Tv Shows</h1>
      <h2>Results for &quot;{query}&quot;</h2>
      <div className="grid grid-cols-custom">
        {tv_shows.map((tv_show) => (
          <Link
            key={tv_show.id}
            to={`/tv_shows/${tv_show.id}`}
            title={tv_show.title}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${tv_show.image}`}
              alt={tv_show.title}
              className="hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
