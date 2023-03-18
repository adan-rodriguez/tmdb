import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import "./index.css";
import { RootLayout } from "./layout";
import { GenderPage } from "./pages/GenderPage";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { PopularMoviesPage } from "./pages/PopularMoviesPage";
import { PopularPeoplePage } from "./pages/PopularPeoplePage";
import { SearchPage } from "./pages/SearchPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TvShowPage } from "./pages/TvShowPage";

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
        path: "genres/:genderName",
        element: <GenderPage />,
      },
      {
        path: "search/:type/:query",
        element: <SearchPage />,
      },
      {
        path: "movies/popular",
        element: <PopularMoviesPage />,
      },
      {
        path: "movies/top_rated",
        element: <TopRatedMoviesPage />,
      },
      {
        path: "people/popular",
        element: <PopularPeoplePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
