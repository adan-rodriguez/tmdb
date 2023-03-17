import { useGetTvShow } from "../hooks/useGetTvShow";

export function TvShowPage() {
  const { title, image, description } = useGetTvShow();

  return (
    <div>
      <img
        className="w-96"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={title}
      />
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
