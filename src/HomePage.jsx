import { CarouselSection } from "./components/CarouselSection";
import { useGetMovies } from "./hooks/useGetMovies";
import { useGetPeople } from "./hooks/useGetPeople";
import { useGetMovie } from "./hooks/useGetMovie";

export function HomePage() {
  const { movies: popularMovies = [] } = useGetMovies("popular");
  const { movies: topRatedMovies } = useGetMovies("top_rated");
  const { people: popularPeople } = useGetPeople();
  const { officialTrailerId } = useGetMovie(popularMovies[0]?.id);

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
        link="movies/popular"
        data={popularMovies}
      />
      <CarouselSection
        section="Top Rated Movies"
        link="movies/top_rated"
        data={topRatedMovies}
      />
      <CarouselSection
        section="Popular People"
        link="people/popular"
        data={popularPeople}
      />
    </>
  );
}
