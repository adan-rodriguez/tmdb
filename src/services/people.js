import { API_KEY_TMDB } from "../utils/constants";

export async function getPeople({ pageParam }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY_TMDB}&page=${pageParam}`
  );
  const data = await response.json();
  const { results, page } = data;
  return {
    people: results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.profile_path, // string or null
    })),
    page,
  };
}

export async function getPerson({ id }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY_TMDB}&append_to_response=movie_credits,images&language=en-US`
  );
  const data = await response.json();
  return {
    name: data.name,
    image: data.profile_path, // string or null
    biography: data.biography,
    birthday: data.birthday, // string or null
    deathday: data.deathday, // string or null
    known_for: data.known_for_department,
    place_of_birth: data.place_of_birth, // string or null
    movie_credits: data.movie_credits.cast.map((movie) => ({
      id: movie.id,
      title: movie.title,
      character: movie.character,
      image: movie.poster_path, // string or null
    })),
    web: data.homepage, // string or null
    imdb_id: data.imdb_id, // string or null
    images: data.images.profiles.map((image) => image.file_path,),
  };
}
