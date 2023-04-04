import { createContext } from "react";
import { useCartReducer } from "../hooks/useFavoritesReducer";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { state, addToFavorites, removeFromFavorites, clearFavorites } =
    useCartReducer();

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
