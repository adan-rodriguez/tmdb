import { useParams } from "react-router-dom";
import { ListGrid } from "../components/ListGrid";
import { useFavorites } from "../hooks/useFavorites";

export function FavoritesMoviesPage() {
  const { page } = useParams();
  const { favorites } = useFavorites();
  const favoritesMovies = favorites.filter((item) => item.type === "movies");
  const pages = Math.ceil(favoritesMovies.length / 20);

  return (
    <ListGrid
      data={favoritesMovies.slice(20 * (page - 1), 20 * page)}
      pages={pages}
      pageTitle="Favorites Movies"
      linkCard="movies"
      linkPagination={`favorites/movies`}
    />
  );
}
