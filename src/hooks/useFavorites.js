import { useContext } from "react";
import { FavoritesContext } from "../contexts/favorites";

export function useFavorites() {
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useContext(FavoritesContext);
  return { favorites, addToFavorites, removeFromFavorites, clearFavorites };
}
