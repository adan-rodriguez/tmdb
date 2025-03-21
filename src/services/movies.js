import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies({ topic, pageParam }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${topic}?api_key=${API_KEY_TMDB}&page=${pageParam}` // 20 resultados como máximo. 500 páginas como máximo.
  );
  // https://api.themoviedb.org/3/movie/${topic}?api_key=${API_KEY_TMDB} === https://api.themoviedb.org/3/movie/${topic}?api_key=${API_KEY_TMDB}&page=1
  const data = await response.json();
  const { results, page } = data;
  return {
    movies: results.map((result) => ({
      id: result.id,
      name: result.title,
      image: result.poster_path, // string or null
      vote_average: result.vote_average,
    })),
    page,
  };
}

export async function getMovie({ id }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_TMDB}&append_to_response=videos,credits`
  );
  const data = await response.json();
  const director = data.credits.crew.find((_) => _.job === "Director");

  return {
    name: data.title,
    image: data.poster_path, // string or null
    description: data.overview, // string or null
    genres: data.genres.map((gender) => ({
      id: gender.id,
      name: gender.name,
    })),
    backdrop: data.backdrop_path, // string or null
    countries: data.production_countries.map((country) => country.name),
    year: data.release_date.slice(0, 4),
    duration: data.runtime, // integer or null
    vote_average: data.vote_average.toFixed(1),
    vote_count: data.vote_count,
    cast: data.credits.cast.map((credit) => ({
      id: credit.id,
      name: credit.name,
      image: credit.profile_path, // string or null
      character: credit.character,
    })),
    director: { id: director.id, name: director.name },
    officialTrailerId: data.videos.results.find(
      (video) => video.official && video.type === "Trailer"
    )?.key,
  };
}
