import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import "./index.css";
import { RootLayout } from "./layout";
import { MoviesGenderPage } from "./pages/MoviesGenderPage";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { PopularMoviesPage } from "./pages/PopularMoviesPage";
import { PopularPeoplePage } from "./pages/PopularPeoplePage";
import { SearchMoviesPage } from "./pages/SearchMoviesPage";
import { SearchPeoplePage } from "./pages/SearchPeoplePage";
import { SearchTvShowsPage } from "./pages/SearchTvShowsPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TvShowPage } from "./pages/TvShowPage";
import { TvShowsGenderPage } from "./pages/TvShowsGenderPage";
import { PopularTvShowsPage } from "./pages/PopularTvShowsPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
      {
        path: "people/:personId",
        element: <PersonPage />,
      },
      {
        path: "tv_shows/:tvShowId",
        element: <TvShowPage />,
      },
      {
        path: "movies/:genderName/:page",
        element: <MoviesGenderPage />,
      },
      {
        path: "tv_shows/:genderName/:page",
        element: <TvShowsGenderPage />,
      },
      {
        path: "search/movies/:query/:page",
        element: <SearchMoviesPage />,
      },
      {
        path: "search/tv_shows/:query/:page",
        element: <SearchTvShowsPage />,
      },
      {
        path: "search/people/:query/:page",
        element: <SearchPeoplePage />,
      },
      {
        path: "movies/popular/:page",
        element: <PopularMoviesPage />,
      },
      {
        path: "movies/top_rated/:page",
        element: <TopRatedMoviesPage />,
      },
      {
        path: "people/popular/:page",
        element: <PopularPeoplePage />,
      },
      {
        path: "tv_shows/popular/:page",
        element: <PopularTvShowsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
