import { API_KEY_TMDB } from "../utils/constants";

export async function getTvShow(tvShowId, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY_TMDB}&page=${page}`
  );
  const data = await response.json();
  return {
    name: data.name,
    image: data.poster_path,
    description: data.overview,
  };
}
