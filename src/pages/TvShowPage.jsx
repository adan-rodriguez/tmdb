import { useGetTvShow } from "../hooks/useGetTvShow";

export function TvShowPage() {
  const { name, image, description } = useGetTvShow();

  return (
    <div>
      <img
        className="w-96"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={name}
      />
      <h2 className="font-bold">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
