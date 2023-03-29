import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";

export function useGetMovie(id) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState([]);
  const [backdrop, setBackdrop] = useState("");
  const [countries, setCountries] = useState([]);
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState(0);
  const [vote_average, setVoteAverage] = useState(0);
  const [vote_count, setVoteCount] = useState(0);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState({});
  const [officialTrailerId, setOfficialTrailerId] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const obtainMovie = async () => {
      const movie = await getMovie(movieId || id);
      setName(movie.name);
      setImage(movie.image);
      setDescription(movie.description);
      setGenres(movie.genres);
      setBackdrop(movie.backdrop);
      setCountries(movie.countries);
      setYear(movie.year);
      setDuration(movie.duration);
      setVoteAverage(movie.vote_average);
      setVoteCount(movie.vote_count);
      setCast(movie.cast);
      setDirector(movie.director);
      setOfficialTrailerId(movie.officialTrailerId);
    };
    obtainMovie();
  }, [id]);

  return {
    name,
    image,
    description,
    genres,
    backdrop,
    countries,
    year,
    duration,
    vote_average,
    vote_count,
    cast,
    director,
    officialTrailerId,
  };
}
