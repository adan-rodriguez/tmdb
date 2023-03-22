import { API_KEY_TMDB } from "../utils/constants";
import { search_type } from "../utils/search_type";

export async function searchData(type, query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY_TMDB}&query=${query}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages } = data;
  switch (type) {
    case search_type.movies:
      return {
        pages: total_pages,
        data: results.map((result) => ({
          id: result.id,
          name: result.title,
          image: result.poster_path,
          vote_average: result.vote_average.toFixed(1),
        })),
      };

    case search_type.people:
      return {
        pages: total_pages,
        data: results.map((result) => ({
          id: result.id,
          name: result.name,
          image: result.profile_path,
          vote_average: result.vote_average.toFixed(1),
        })),
      };

    case search_type.tv_shows:
      return {
        pages: total_pages,
        data: results.map((result) => ({
          id: result.id,
          name: result.name,
          image: result.poster_path,
          vote_average: result.vote_average.toFixed(1),
        })),
      };

    default:
      break;
  }
}
