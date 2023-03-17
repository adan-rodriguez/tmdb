import { API_KEY_TMDB } from "../utils/constants";

export async function getTvShow(tvShowId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY_TMDB}`
  );
  const data = await response.json();
  return {
    title: data.name,
    image: data.poster_path,
    description: data.overview,
  };
}
