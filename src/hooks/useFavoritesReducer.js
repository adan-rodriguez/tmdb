import { useReducer } from "react";
import { favoritesInitialState, favoritesReducer } from "../reducers/favorites";

export function useCartReducer() {
  const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState);

  const addToFavorites = (item) =>
    dispatch({ type: "addToFavorites", payload: item });

  const removeFromFavorites = (id) =>
    dispatch({ type: "removeFromFavorites", payload: id });

  const clearFavorites = () => dispatch({ type: "clearFavorites" });

  return {
    state,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
  };
}
