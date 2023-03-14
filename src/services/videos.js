import { API_KEY_TMDB } from "../utils/constants";

export async function getVideos(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY_TMDB}&language=en-US`
  );
  const data = await response.json();
  const { results } = data;
  return results?.map((result) => ({
    id: result.key,
    title: result.name,
    site: result.site,
    type: result.type,
    official: result.official,
  }));
}
