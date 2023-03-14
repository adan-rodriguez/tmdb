import { Link } from "react-router-dom";
import useGetMovie from "../hooks/useGetMovie";
import useGetVideos from "../hooks/useGetVideos";

export default function MoviePage() {
  const { title, image, description, genres } = useGetMovie();
  const { officialTrailerId } = useGetVideos();

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
      <div>
        {genres &&
          genres.map((gender) => (
            <Link key={gender.id} to={`/genres/${gender.id}`}>
              <span>{gender.name}</span>
            </Link>
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
