import { Carousel } from "../components/Carousel";
import { useGetMovies } from "../hooks/useGetMovies";
import { useGetPeople } from "../hooks/useGetPeople";
import { useGetMovie } from "../hooks/useGetMovie";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function HomePage() {
  const { isLoading: isLoadingPopularMovies, movies: popularMovies = [] } =
    useGetMovies({ topic: "popular" });
  const { movie } = useGetMovie({
    id: popularMovies[0]?.id,
  });
  const { isLoading: isLoadingTopRatedMovies, movies: topRatedMovies } =
    useGetMovies({ topic: "top_rated" });
  const { isLoading: isLoadingPopularPeople, people: popularPeople } =
    useGetPeople(); // solo tiene popular la api
  const { isLoading: isLoadingPopularTvShows, tvShows: popularTvShows } =
    useGetTvShows({ topic: "popular" });
  const { isLoading: isLoadingTopRatedTvShows, tvShows: topRatedTvShows } =
    useGetTvShows({ topic: "top_rated" });

  return (
    <>
      <iframe
        className="w-full h-96 bg-black"
        src={`https://www.youtube.com/embed/${movie?.officialTrailerId}?autoplay=1&controls=0&rel=0&showinfo=0`}
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
        isLoading={isLoadingPopularMovies}
      />

      <Carousel
        title="Top rated Movies"
        type="movies"
        topic="top_rated"
        data={topRatedMovies}
        isLoading={isLoadingTopRatedMovies}
      />

      <Carousel
        title="Popular People"
        type="people"
        topic="popular"
        data={popularPeople}
        isLoading={isLoadingPopularPeople}
      />

      <Carousel
        title="Popular Tv Shows"
        type="tv"
        topic="popular"
        data={popularTvShows}
        isLoading={isLoadingPopularTvShows}
      />

      <Carousel
        title="Top rated Tv Shows"
        type="tv"
        topic="top_rated"
        data={topRatedTvShows}
        isLoading={isLoadingTopRatedTvShows}
      />
    </>
  );
}
