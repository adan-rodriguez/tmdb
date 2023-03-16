import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";

export default function useGetMovie(id) {
  const [movie, setMovie] = useState({});
  const [officialTrailerId, setOfficialTrailerId] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const obtainMovie = async () => {
      const movie = await getMovie(movieId || id);
      setMovie(movie);
    };
    obtainMovie();
  }, [id]);

  useEffect(() => {
    setOfficialTrailerId(
      movie.videos?.find((video) => video.official && video.type === "Trailer")
        ?.key
    );
  }, [movie]);

  return { ...movie, officialTrailerId };
}
