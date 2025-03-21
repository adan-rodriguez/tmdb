import { API_KEY_TMDB } from "../utils/constants";
import { search_type } from "../utils/search_type";

export async function searchData(type, query, pageParam) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY_TMDB}&query=${query}&page=${pageParam}`
  );
  const data = await response.json();

  const { results, page } = data;
  switch (type) {
    case search_type.movies:
      return {
        data: results.map((result) => ({
          id: result.id,
          name: result.title,
          image: result.poster_path, // string or null
          vote_average: result.vote_average.toFixed(1),
        })),
        page,
      };

    case search_type.people:
      return {
        data: results.map((result) => ({
          id: result.id,
          name: result.name,
          image: result.profile_path, // string or null
          vote_average: result.vote_average.toFixed(1),
        })),
        page,
      };

    case search_type.tv:
      return {
        data: results.map((result) => ({
          id: result.id,
          name: result.name,
          image: result.poster_path, // string or null
          vote_average: result.vote_average.toFixed(1),
        })),
        page,
      };

    default:
      break;
  }
}
