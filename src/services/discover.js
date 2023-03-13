import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_TMDB}&language=en-US&with_genres=${id}&page=1`
  );
  const data = await response.json();
  const { results } = data;
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    image: result.poster_path,
  }));
}
