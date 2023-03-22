import { API_KEY_TMDB } from "../utils/constants";

export async function getTvShows(q, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${q}?api_key=${API_KEY_TMDB}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages: pages } = data;
  return {
    pages,
    tvShows: results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.poster_path,
      vote_average: result.vote_average,
    })),
  };
}

export async function getTvShow(tvShowId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY_TMDB}`
  );
  const data = await response.json();
  return {
    name: data.name,
    image: data.poster_path,
    description: data.overview,
    genres: data.genres.map((gender) => ({ id: gender.id, name: gender.name })),
  };
}
