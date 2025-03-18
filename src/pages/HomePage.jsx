import { Carousel } from "../components/Carousel";
import { useGetMovies } from "../hooks/useGetMovies";
import { useGetPeople } from "../hooks/useGetPeople";
import { useGetMovie } from "../hooks/useGetMovie";
import { useGetTvShows } from "../hooks/useGetTvShows";
import { useFavorites } from "../hooks/useFavorites";

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
      <Carousel
        title="Popular Movies"
        type="movies"
        topic="popular"
        data={popularMovies}
      />
      <Carousel
        title="Top rated Movies"
        type="movies"
        topic="top_rated"
        data={topRatedMovies}
      />
      <Carousel
        title="Popular People"
        type="people"
        topic="popular"
        data={popularPeople}
      />
      <Carousel
        title="Popular Tv Shows"
        type="tv_shows"
        topic="popular"
        data={popularTvShows}
      />
      <Carousel
        title="Top rated Tv Shows"
        type="tv_shows"
        topic="top_rated"
        data={topRatedTvShows}
      />
      {/* {favorites.some((item) => item.type === "movies") && (
        <Carousel
          title="Favorites Movies"
          type="favorites"
          topic="movies"
          data={favorites.filter((item) => item.type === "movies")}
        />
      )}
      {favorites.some((item) => item.type === "people") && (
        <Carousel
          title="Favorites People"
          type="favorites"
          topic="people"
          data={favorites.filter((item) => item.type === "people")}
        />
      )}
      {favorites.some((item) => item.type === "tv_shows") && (
        <Carousel
          title="Favorites Tv Shows"
          type="favorites"
          topic="tv_shows"
          data={favorites.filter((item) => item.type === "tv_shows")}
        />
      )} */}
    </>
  );
}
