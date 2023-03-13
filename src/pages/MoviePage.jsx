import { Link } from "react-router-dom";
import useGetMovie from "../hooks/useGetMovie";

export default function MoviePage() {
  const { title, image, description, genres, isLoading } = useGetMovie();

  return (
    // <>
    //   {isLoading ? (
    //     <p>Cargando...</p>
    //   ) : (
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
    </div>
    //   )}
    // </>
  );
}
