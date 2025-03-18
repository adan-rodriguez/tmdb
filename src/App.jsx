import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { TvShowPage } from "./pages/TvShowPage";
import { MoviesGenderPage } from "@/pages/MoviesGenderPage";
import { TvShowsGenderPage } from "@/pages/TvShowsGenderPage";
import { SearchMoviesPage } from "./pages/SearchMoviesPage";
import { SearchTvShowsPage } from "./pages/SearchTvShowsPage";
import { SearchPeoplePage } from "./pages/SearchPeoplePage";
import { PopularMoviesPage } from "./pages/PopularMoviesPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TopRatedTvShowsPage } from "./pages/TopRatedTvShowsPage";
import { PopularPeoplePage } from "./pages/PopularPeoplePage";
import { PopularTvShowsPage } from "./pages/PopularTvShowsPage";
import { FavoritesMoviesPage } from "./pages/FavoritesMoviesPage";
import { FavoritesPeoplePage } from "./pages/FavoritesPeoplePage";
import { FavoritesTvShowsPage } from "./pages/FavoritesTvShowsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        <Route path="/people/:personId" element={<PersonPage />} />
        <Route path="/tv_shows/:tvShowId" element={<TvShowPage />} />
        <Route
          path="/movies/:genderName/:page"
          element={<MoviesGenderPage />}
        />
        <Route
          path="/tv_shows/:genderName/:page"
          element={<TvShowsGenderPage />}
        />
        <Route
          path="/search/movies/:query/:page"
          element={<SearchMoviesPage />}
        />
        <Route
          path="/search/tv_shows/:query/:page"
          element={<SearchTvShowsPage />}
        />
        <Route
          path="/search/people/:query/:page"
          element={<SearchPeoplePage />}
        />
        <Route path="/movies/popular/:page" element={<PopularMoviesPage />} />
        <Route
          path="/movies/top_rated/:page"
          element={<TopRatedMoviesPage />}
        />
        <Route
          path="/tv_shows/top_rated/:page"
          element={<TopRatedTvShowsPage />}
        />
        <Route path="/people/popular/:page" element={<PopularPeoplePage />} />
        <Route
          path="/tv_shows/popular/:page"
          element={<PopularTvShowsPage />}
        />
        <Route
          path="/favorites/movies/:page"
          element={<FavoritesMoviesPage />}
        />
        <Route
          path="/favorites/people/:page"
          element={<FavoritesPeoplePage />}
        />
        <Route
          path="/favorites/tv_shows/:page"
          element={<FavoritesTvShowsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
