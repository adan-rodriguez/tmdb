import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies(q, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${q}?api_key=${API_KEY_TMDB}&page=${page}`
  );
  const data = await response.json();
  const { results, total_pages: pages } = data;
  return {
    pages,
    movies: results.map((result) => ({
      id: result.id,
      name: result.title,
      image: result.poster_path,
    })),
  };
}

export async function getMovie(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY_TMDB}&append_to_response=videos,credits`
  );
  const data = await response.json();
  return {
    name: data.title,
    image: data.poster_path,
    description: data.overview,
    genres: data.genres,
    videos: data.videos.results,
    website: data.homepage,
    backdrop: data.backdrop_path,
    companies: data.production_companies.map((company) => ({
      id: company.id,
      name: company.name,
      logo: company.logo_path,
    })),
    countries: data.production_countries.map((country) => country.name),
    release_date: data.release_date,
    duration: data.runtime,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    cast: data.credits.cast,
    director: data.credits.crew.find((_) => _.job === "Director"),
  };
}
