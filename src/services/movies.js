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
      vote_average: result.vote_average,
    })),
  };
}

export async function getMovie(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY_TMDB}&append_to_response=videos,credits`
  );
  const data = await response.json();
  const director = data.credits.crew.find((_) => _.job === "Director");

  return {
    name: data.title,
    image: data.poster_path,
    description: data.overview,
    genres: data.genres.map((gender) => ({ id: gender.id, name: gender.name })),
    videos: data.videos.results.map((video) => ({
      id: video.key,
      type: video.type,
      official: video.official,
    })),
    // website: data.homepage,
    backdrop: data.backdrop_path,
    // companies: data.production_companies.map((company) => ({
    //   id: company.id,
    //   name: company.name,
    //   logo: company.logo_path,
    // })),
    countries: data.production_countries.map((country) => country.name),
    year: data.release_date.slice(0, 4),
    duration: data.runtime,
    vote_average: data.vote_average.toFixed(1),
    vote_count: data.vote_count,
    cast: data.credits.cast.map((credit) => ({
      id: credit.id,
      name: credit.name,
      image: credit.profile_path,
      character: credit.character,
    })),
    director: { id: director.id, name: director.name },
  };
}
