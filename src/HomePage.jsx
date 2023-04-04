import { CarouselSection } from "./components/CarouselSection";
import { useGetMovies } from "./hooks/useGetMovies";
import { useGetPeople } from "./hooks/useGetPeople";
import { useGetMovie } from "./hooks/useGetMovie";
import { useGetTvShows } from "./hooks/useGetTvShows";
import { useFavorites } from "./hooks/useFavorites";

export function HomePage() {
  const { movies: popularMovies } = useGetMovies("popular");
  const { movies: topRatedMovies } = useGetMovies("top_rated");
  const { people: popularPeople } = useGetPeople();
  const { tvShows: popularTvShows } = useGetTvShows("popular");
  const { tvShows: topRatedTvShows } = useGetTvShows("top_rated");
  const { officialTrailerId } = useGetMovie(popularMovies[0]?.id);
  const { favorites } = useFavorites();

  return (
    <>
      <iframe
        className="w-full h-96"
        src={`https://www.youtube.com/embed/${officialTrailerId}?autoplay=1&controls=0&rel=0&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CarouselSection
        section="Popular Movies"
        linkSection="movies/popular"
        linkCard="movies"
        data={popularMovies}
      />
      <CarouselSection
        section="Top rated Movies"
        linkSection="movies/top_rated"
        linkCard="movies"
        data={topRatedMovies}
      />
      <CarouselSection
        section="Popular People"
        linkSection="people/popular"
        linkCard="people"
        data={popularPeople}
      />
      <CarouselSection
        section="Popular Tv Shows"
        linkSection="tv_shows/popular"
        linkCard="tv_shows"
        data={popularTvShows}
      />
      <CarouselSection
        section="Top rated Tv Shows"
        linkSection="tv_shows/top_rated"
        linkCard="tv_shows"
        data={topRatedTvShows}
      />
      {favorites.some((item) => item.type === "movies") && (
        <CarouselSection
          section="Favorites Movies"
          linkSection="favorites/movies"
          linkCard="movies"
          data={favorites.filter((item) => item.type === "movies")}
        />
      )}
      {favorites.some((item) => item.type === "people") && (
        <CarouselSection
          section="Favorites People"
          linkSection="favorites/people"
          linkCard="people"
          data={favorites.filter((item) => item.type === "people")}
        />
      )}
      {favorites.some((item) => item.type === "tv_shows") && (
        <CarouselSection
          section="Favorites Tv Shows"
          linkSection="favorites/tv_shows"
          linkCard="tv_shows"
          data={favorites.filter((item) => item.type === "tv_shows")}
        />
      )}
    </>
  );
}
