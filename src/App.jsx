import MoviesSection from "./components/MoviesSection";
import { useGetMovies } from "./hooks/useGetMovies";
import { useGetPeople } from "./hooks/useGetPeople";

export default function App() {
  const popularMovies = useGetMovies("popular");
  const topRatedMovies = useGetMovies("top_rated");
  const { people, isLoading } = useGetPeople();

  return (
    <>
      <MoviesSection section="Popular Movies" {...popularMovies} />
      <MoviesSection section="Top Rated Movies" {...topRatedMovies} />
      <section className="overflow-hidden">
        <h2>Popular Persons</h2>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
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
        )}
      </section>
    </>
  );
}

//  - Clave de la API (v3 auth): 64af5ae223f721c9a97d3e70ca3a2276

//  - Ejemplo de solicitud de API: https://api.themoviedb.org/3/movie/550?api_key=64af5ae223f721c9a97d3e70ca3a2276

//  - Token de acceso de lectura a la API (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGFmNWFlMjIzZjcyMWM5YTk3ZDNlNzBjYTNhMjI3NiIsInN1YiI6IjY0MDhkMjNhMDNmMGI2MDBlOWIwMDNjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abpeX3lb-UuGKBCA8P7gi50YTWPzrXV3beCMYahsF2U

// https://api.themoviedb.org/3/movie/550?api_key=64af5ae223f721c9a97d3e70ca3a2276&language=es

// Tomemos, por ejemplo, el logotipo de Netflix(wwemzKWzjKYJFfCeiB57q3r4Bcm.svg), puede llamar a cualquiera de los siguientes:
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
