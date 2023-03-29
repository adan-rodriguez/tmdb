import { Link } from "react-router-dom";
import { useGetTvShow } from "../hooks/useGetTvShow";

export function TvShowPage() {
  const {
    name,
    image,
    description,
    genres,
    backdrop,
    first_air_date,
    last_air_date,
    n_episodes,
    n_seasons,
    countries,
    vote_average,
    vote_count,
    officialTrailerId,
  } = useGetTvShow();

  return (
    <div className="p-4 bg-zinc-900">
      <h2 className="text-4xl font-black">{name}</h2>
      <div className="flex items-center gap-5 text-sm opacity-80">
        <span>
          {first_air_date.slice(0, 4)}-{last_air_date.slice(0, 4)} | {n_seasons}{" "}
          seasons | {n_episodes} episodes
        </span>
        <div className="flex gap-x-3 items-baseline">
          <svg
            className="opacity-100"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="yellow"
          >
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
          </svg>
          <span>{vote_average}</span>
          <span className="text-xs">{vote_count}votes</span>
        </div>
      </div>
      <div className="flex gap-y-5 text-sm opacity-80">
        <span>
          {countries.length === 1 ? countries : countries.join(" | ")}
        </span>
      </div>
      <div className="my-4 relative">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt={name}
        />
        <img
          className="w-52 absolute bottom-0 max-w-[25%]"
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={name}
        />
      </div>
      <div className="flex gap-x-2">
        {genres.map((gender) => (
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
      <p className="py-5 border-b border-white border-solid">{description}</p>
      {officialTrailerId && (
        <iframe
          className="w-full h-96"
          src={`https://www.youtube.com/embed/${officialTrailerId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
