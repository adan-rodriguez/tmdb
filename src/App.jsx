import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { TvShowPage } from "./pages/TvShowPage";
import { MoviesByGenderPage } from "@/pages/MoviesByGenderPage";
import { TvShowsByGenderPage } from "@/pages/TvShowsByGenderPage";
import { SearchMoviesPage } from "./pages/SearchMoviesPage";
import { SearchTvShowsPage } from "./pages/SearchTvShowsPage";
import { SearchPeoplePage } from "./pages/SearchPeoplePage";
import { PopularMoviesPage } from "./pages/PopularMoviesPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TopRatedTvShowsPage } from "./pages/TopRatedTvShowsPage";
import { PopularPeoplePage } from "./pages/PopularPeoplePage";
import { PopularTvShowsPage } from "./pages/PopularTvShowsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/tv/:id" element={<TvShowPage />} />
        <Route path="/movies/genres/:id" element={<MoviesByGenderPage />} />
        <Route path="/tv/genres/:id" element={<TvShowsByGenderPage />} />
        <Route path="/search/movies/:query" element={<SearchMoviesPage />} />
        <Route path="/search/tv/:query" element={<SearchTvShowsPage />} />
        <Route path="/search/people/:query" element={<SearchPeoplePage />} />
        <Route path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
        <Route path="/tv/popular" element={<PopularTvShowsPage />} />
        <Route path="/tv/top_rated" element={<TopRatedTvShowsPage />} />
        <Route path="/people/popular" element={<PopularPeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
