import MoviesSection from "./components/MoviesSection";
import { useGetMovies } from "./hooks/useGetMovies";
import { useGetPeople } from "./hooks/useGetPeople";
import useGetMovie from "./hooks/useGetMovie";

export default function App() {
  const { movies: popularMovies } = useGetMovies("popular");
  const { movies: topRatedMovies } = useGetMovies("top_rated");
  const { people } = useGetPeople();
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

      <MoviesSection section="Popular Movies" movies={popularMovies} />
      <MoviesSection section="Top Rated Movies" movies={topRatedMovies} />
      <section className="overflow-hidden">
        <h2>Popular Persons</h2>
        <div className="probando2">
          {people.map((people) => (
            <img
              key={people.id}
              src={`https://image.tmdb.org/t/p/w500${people.image}`}
              alt={people.name}
              className="hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </>
  );
}
