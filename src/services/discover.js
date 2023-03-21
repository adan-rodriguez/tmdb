import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies(id, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_TMDB}&with_genres=${id}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages } = data;
  return {
    pages: total_pages,
    movies: results.map((result) => ({
      id: result.id,
      name: result.title,
      image: result.poster_path,
      vote_average: result.vote_average,
    })),
  };
}
