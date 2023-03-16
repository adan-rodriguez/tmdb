import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.css";
import RootLayout from "./layout";
import GenderPage from "./pages/GenderPage";
import MoviePage from "./pages/MoviePage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import SearchPage from "./pages/SearchPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";

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
        path: "genres/:genderId",
        element: <GenderPage />,
      },
      {
        path: "search/:query",
        element: <SearchPage />,
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
