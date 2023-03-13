import { API_KEY_TMDB } from "../utils/constants";

export async function getPeople() {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY_TMDB}&language=en-US&page=1`
  );
  const data = await response.json();
  const { results } = data;
  return results.map((result) => ({
    id: result.id,
    name: result.name,
    image: result.profile_path,
  }));
}
