import { API_KEY_TMDB } from "../utils/constants";

export async function getTvShows(type, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${type}?api_key=${API_KEY_TMDB}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages: pages } = data;
  return {
    pages,
    tvShows: results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.poster_path, // string or null
      vote_average: result.vote_average,
    })),
  };
}

export async function getTvShow(tvShowId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY_TMDB}&append_to_response=videos,credits`
  );
  const data = await response.json();
  return {
    name: data.name,
    image: data.poster_path, // string or null
    description: data.overview,
    genres: data.genres.map((gender) => ({ id: gender.id, name: gender.name })),
    backdrop: data.backdrop_path, // string or null
    episode_duration: data.episode_run_time[0],
    first_air_date: data.first_air_date,
    last_air_date: data.last_air_date,
    n_episodes: data.number_of_episodes,
    n_seasons: data.number_of_seasons,
    countries: data.production_countries.map((country) => country.name),
    vote_average: data.vote_average.toFixed(1),
    vote_count: data.vote_count,
    officialTrailerId: data.videos.results.find(
      (video) => video.official && video.type === "Trailer"
    )?.key,
  };
}
