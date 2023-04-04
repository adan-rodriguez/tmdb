import { useParams } from "react-router-dom";
import { ListGrid } from "../components/ListGrid";
import { useFavorites } from "../hooks/useFavorites";

export function FavoritesPeoplePage() {
  const { page } = useParams();
  const { favorites } = useFavorites();
  const favoritesPeople = favorites.filter((item) => item.type === "people");
  const pages = Math.ceil(favoritesPeople.length / 20);

  return (
    <ListGrid
      data={favoritesPeople.slice(20 * (page - 1), 20 * page)}
      pages={pages}
      pageTitle="Favorites People"
      linkCard="people"
      linkPagination={`favorites/people`}
    />
  );
}
