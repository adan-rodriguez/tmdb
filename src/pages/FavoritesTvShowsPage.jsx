import { useParams } from "react-router-dom";
import { ListGrid } from "../components/ListGrid";
import { useFavorites } from "../hooks/useFavorites";

export function FavoritesTvShowsPage() {
  const { page } = useParams();
  const { favorites } = useFavorites();
  const favoritesTvShows = favorites.filter((item) => item.type === "tv_shows");
  const pages = Math.ceil(favoritesTvShows.length / 20);

  return (
    <ListGrid
      data={favoritesTvShows.slice(20 * (page - 1), 20 * page)}
      pages={pages}
      pageTitle="Favorites Tv Shows"
      linkCard="tv_shows"
      linkPagination={`favorites/tv_shows`}
    />
  );
}
