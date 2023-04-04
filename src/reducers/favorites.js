export const favoritesInitialState =
  JSON.parse(window.localStorage.getItem("favorites")) || [];

const updateFavoritesLocalStorage = (state) => {
  window.localStorage.setItem("favorites", JSON.stringify(state));
};

export const favoritesReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "addToFavorites": {
      const newState = [actionPayload, ...state];
      updateFavoritesLocalStorage(newState);
      return newState;
    }

    case "removeFromFavorites": {
      console.log(actionPayload);
      const newState = state.filter((item) => item.id != actionPayload);
      updateFavoritesLocalStorage(newState);
      return newState;
    }

    case "clearFavorites":
      updateFavoritesLocalStorage([]);
      return [];
  }

  return state;
};
