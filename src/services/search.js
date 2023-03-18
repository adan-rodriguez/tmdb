import { API_KEY_TMDB } from "../utils/constants";
import { search_type } from "../utils/search_type";

export async function searchData(type, query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY_TMDB}&query=${query}&language=en-US&page=1`
  );
  const data = await response.json();
  const { results } = data;
  switch (type) {
    case search_type.movies:
      return results.map((result) => ({
        id: result.id,
        name: result.title,
        image: result.poster_path,
        description: result.overview,
      }));

    case search_type.people:
      return results.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.profile_path,
        job: result.know_for_department,
      }));

    case search_type.tv_shows:
      return results.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.poster_path,
      }));

    default:
      break;
  }
}
