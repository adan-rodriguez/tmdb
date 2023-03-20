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
    release_date,
    duration,
    vote_average,
    vote_count,
    countries,
    companies,
    director,
  } = useGetMovie();

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original${backdrop}`} alt={name} />
      <img
        className="w-96"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={name}
      />
      <h2 className="font-bold">{name}</h2>
      <p>{description}</p>
      <div>
        {genres?.map((gender) => (
          <Link key={gender.id} to={`/genres/${gender.name.toLowerCase()}/1`}>
            <span>{gender.name}</span>
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
      <span>{release_date}</span>
      <span>{duration}</span>
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
      {officialTrailerId && (
        <iframe
          width="560"
          height="315"
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
