import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShow } from "../services/tv_shows";

export function useGetTvShow() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState([]);
  const [backdrop, setBackdrop] = useState("");
  const [episode_duration, setEpisodeDuration] = useState(0);
  const [first_air_date, setFirstAirDate] = useState("");
  const [last_air_date, setLastAirDate] = useState("");
  const [n_episodes, setNEpisodes] = useState(0);
  const [n_seasons, setNSeasons] = useState(0);
  const [countries, setCountries] = useState([]);
  const [vote_average, setVoteAverage] = useState(0);
  const [vote_count, setVoteCount] = useState(0);
  const [officialTrailerId, setOfficialTrailerId] = useState("");
  const { tvShowId } = useParams();

  const obtainTvShow = async () => {
    const tvShow = await getTvShow(tvShowId);
    setName(tvShow.name);
    setImage(tvShow.image);
    setDescription(tvShow.description);
    setGenres(tvShow.genres);
    setBackdrop(tvShow.backdrop);
    setEpisodeDuration(tvShow.episode_duration);
    setFirstAirDate(tvShow.first_air_date);
    setLastAirDate(tvShow.last_air_date);
    setNEpisodes(tvShow.n_episodes);
    setNSeasons(tvShow.n_seasons);
    setCountries(tvShow.countries);
    setVoteAverage(tvShow.vote_average);
    setVoteCount(tvShow.vote_count);
    setOfficialTrailerId(tvShow.officialTrailerId);
  };

  useEffect(() => {
    obtainTvShow();
  }, []);

  return {
    name,
    image,
    description,
    genres,
    backdrop,
    episode_duration,
    first_air_date,
    last_air_date,
    n_episodes,
    n_seasons,
    countries,
    vote_average,
    vote_count,
    officialTrailerId,
  };
}
