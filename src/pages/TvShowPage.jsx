import { Link } from "react-router-dom";
import { useGetTvShow } from "../hooks/useGetTvShow";

export function TvShowPage() {
  const { name, image, description, genres } = useGetTvShow();

  return (
    <>
      <div>
        <img
          className="w-96"
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={name}
        />
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
      </div>
      <div className="flex gap-x-2">
        {genres?.map((gender) => (
          <Link
            key={gender.id}
            to={`/tv_shows/${gender.name.toLowerCase().replace(/ /g, "-")}/1`}
          >
            <span className="text-xs font-bold px-3 py-1 rounded-xl border border-solid hover:bg-slate-700  transition-colors">
              {gender.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
