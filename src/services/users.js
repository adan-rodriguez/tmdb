import { API_KEY_TMDB } from "@/utils/constants";

export async function getUser({ sessionId }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/account?api_key=${API_KEY_TMDB}&session_id=${sessionId}`
  );

  return await response.json();
}
