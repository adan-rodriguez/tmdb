import { Link, useParams } from "react-router-dom";
import { useGetTvShow } from "../hooks/useGetTvShow";

export function TvShowPage() {
  const { id } = useParams();
  const { isLoading, isError, tvShow } = useGetTvShow({ id });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="bg-zinc-900">
      <div className="relative h-[calc(100vh-60px)]">
        <div className="absolute p-4 w-full bg-gradient-to-b from-black to-transparent">
          <h2 className="text-4xl font-black">{tvShow.name}</h2>
          <div className="flex items-center gap-5 text-sm opacity-80">
            <span>
              {tvShow.first_air_date.slice(0, 4)}-
              {tvShow.last_air_date.slice(0, 4)} | {tvShow.n_seasons} seasons |{" "}
              {tvShow.n_episodes} episodes
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
              <span>{tvShow.vote_average}</span>
              <span className="text-xs">{tvShow.vote_count}votes</span>
            </div>
          </div>
          <div className="flex gap-y-5 text-sm opacity-80">
            <span>
              {tvShow.countries.length === 1
                ? tvShow.countries
                : tvShow.countries.join(" | ")}
            </span>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${tvShow.backdrop}`}
          alt={tvShow.name}
        />
        <img
          className="w-52 absolute bottom-0 max-w-[25%]"
          src={`https://image.tmdb.org/t/p/original${tvShow.image}`}
          alt={tvShow.name}
        />
      </div>
      <div className="p-4">
        <div className="flex gap-x-2">
          {tvShow.genres.map((gender) => (
            <Link key={gender.id} to={`/tv/genres/${gender.id}`}>
              <span className="text-xs font-bold px-3 py-1 rounded-xl border border-solid hover:bg-slate-700  transition-colors">
                {gender.name}
              </span>
            </Link>
          ))}
        </div>
        <p className="py-5 border-b border-white border-solid">
          {tvShow.description}
        </p>
        {tvShow.officialTrailerId && (
          <iframe
            className="w-full h-96"
            src={`https://www.youtube.com/embed/${tvShow.officialTrailerId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
