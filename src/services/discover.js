import { API_KEY_TMDB } from "../utils/constants";

export async function getData({ type, genderId, pageParam }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY_TMDB}&with_genres=${genderId}&page=${pageParam}`
  );
  const data = await response.json();
  const { results, page } = data;
  return {
    data: results.map((result) => ({
      id: result.id,
      name: result.title,
      image: result.poster_path, // string or null
      vote_average: result.vote_average,
    })),
    page,
  };
}
