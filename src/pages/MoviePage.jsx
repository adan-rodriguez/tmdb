import { Link } from "react-router-dom";
import { useGetMovie } from "../hooks/useGetMovie";

export function MoviePage() {
  const {
    name,
    image,
    description,
    genres,
    officialTrailerId,
    backdrop,
    website,
    year,
    duration,
    vote_average,
    vote_count,
    countries,
    companies,
    director,
  } = useGetMovie();

  return (
    <div className="p-4 bg-zinc-900">
      <h2 className="text-4xl font-black">{name}</h2>
      <span className="text-sm opacity-80">
        {year} | {duration}min
      </span>
      <div className="relative">
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
      <div className="flex flex-col gap-y-4 mt-4">
        <p>{description}</p>
        <div className="flex gap-x-2">
          {genres?.map((gender) => (
            <Link key={gender.id} to={`/genres/${gender.name.toLowerCase()}/1`}>
              <span className="text-xs font-bold px-3 py-1 rounded-xl border border-solid hover:bg-slate-700  transition-colors">
                {gender.name}
              </span>
            </Link>
          ))}
        </div>
        <span>Director: {director?.name}</span>
        <a
          href={website}
          title={`Visit ${name} Website`}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
        <span>{vote_average}</span>
        <span>{vote_count}</span>
        <div>
          {countries?.map((country) => (
            <span key={country}>{country}</span>
          ))}
        </div>
        <div>
          {companies?.map((company) => (
            <div key={company.id}>
              <img
                className="w-24"
                src={`https://image.tmdb.org/t/p/original${company.logo}`}
                alt={company.name}
              />
              <span key={company.name}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
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
