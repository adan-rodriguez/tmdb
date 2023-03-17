import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./ErrorPage";
import "./index.css";
import { RootLayout } from "./layout";
import { GenderPage } from "./pages/GenderPage";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { PopularMoviesPage } from "./pages/PopularMoviesPage";
import { SearchMoviesPage } from "./pages/SearchMoviesPage";
import { SearchPeoplePage } from "./pages/SearchPeoplePage";
import { SearchTvShowsPage } from "./pages/SearchTvShowsPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TvShowPage } from "./pages/TvShowPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
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
        path: "genres/:genderId",
        element: <GenderPage />,
      },
      {
        path: "search/movies/:query",
        element: <SearchMoviesPage />,
      },
      {
        path: "search/people/:query",
        element: <SearchPeoplePage />,
      },
      {
        path: "search/tv_shows/:query",
        element: <SearchTvShowsPage />,
      },
      {
        path: "popular",
        element: <PopularMoviesPage />,
      },
      {
        path: "top_rated",
        element: <TopRatedMoviesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
