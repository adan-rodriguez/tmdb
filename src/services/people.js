import { API_KEY_TMDB } from "../utils/constants";

export async function getPeople(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY_TMDB}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages } = data;
  return {
    pages: total_pages,
    people: results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.profile_path,
    })),
  };
}

export async function getPerson(personId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY_TMDB}`
  );
  const data = await response.json();
  return {
    name: data.name,
    image: data.profile_path,
    biography: data.biography,
    birthday: data.birthday,
    deathday: data.deathday,
    website: data.homepage,
    known_for: data.known_for_department,
    place_of_birth: data.place_of_birth,
  };
}
