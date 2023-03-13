import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies(q) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_TMDB}&query=${q}&language=en-US&page=1`
  );
  const data = await response.json();
  const { results } = data;
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    image: result.poster_path,
    description: result.overview,
  }));
}
