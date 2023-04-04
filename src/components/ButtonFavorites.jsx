import { useFavorites } from "../hooks/useFavorites";

export function ButtonFavorites({ item, isFavorite }) {
  const { addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <>
      {isFavorite ? (
        <button
          className="absolute top-0 left-0 bg-zinc-900 bg-opacity-50 hover:brightness-200"
          title="Remove from favorites"
          onClick={() => removeFromFavorites(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // className="icon icon-tabler icon-tabler-heart"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ff2825"
            fill="red"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      ) : (
        <button
          className="absolute top-0 left-0 bg-zinc-900 bg-opacity-50 hover:brightness-200"
          title="Add to favorites"
          onClick={() => addToFavorites(item)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // className="icon icon-tabler icon-tabler-heart"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ff2825"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      )}
    </>
  );
}
