import { API_KEY_TMDB } from "../utils/constants";

export async function getMovies(q) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${q}?api_key=${API_KEY_TMDB}&language=en-US&page=1`
  );
  const data = await response.json();
  const { results } = data;
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    image: result.poster_path,
    description: result.overview,
  }));
}

export async function getMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_TMDB}&language=en-US&append_to_response=videos`
  );
  const data = await response.json();
  return {
    title: data.title,
    image: data.poster_path,
    description: data.overview,
    genres: data.genres,
    videos: data.videos.results,
  };
}
