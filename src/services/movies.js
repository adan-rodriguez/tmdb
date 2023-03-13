import { API_KEY_TMDB } from "../utils/constants";
// import { results } from "../mocks/movies.json";

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

// export async function getMovies() {
//   return results.map((result) => ({
//     id: result.id,
//     title: result.title,
//     image: result.poster_path,
//     description: result.overview,
//   }));
// }

export async function getMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_TMDB}&language=en-US`
  );
  const data = await response.json();
  return {
    title: data.title,
    image: data.poster_path,
    description: data.overview,
  };
}

// export async function getTopRatedMovies() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY_TMDB}&language=en-US&page=1`
//   );
//   const data = await response.json();
//   const { results } = data;
//   return results.map((result) => ({
//     id: result.id,
//     title: result.title,
//     image: result.poster_path,
//     description: result.overview,
//   }));
// }
