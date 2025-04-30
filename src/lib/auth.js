import { API_KEY_TMDB, BASE_URL } from "@/utils/constants";

const createRequestToken = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY_TMDB}`
  );

  return await response.json();
};

export const redirectToTMDB = async () => {
  const result = await createRequestToken();

  if (!result.success) {
    alert("Error al obtener el token de autenticación");
    return;
  }

  window.location.href = `https://www.themoviedb.org/authenticate/${result.request_token}?redirect_to=${BASE_URL}/auth`;
};

export const createSession = async (request_token) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY_TMDB}&request_token=${request_token}`
  );

  return await response.json();
};

export const deleteSession = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session`,
    {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGFmNWFlMjIzZjcyMWM5YTk3ZDNlNzBjYTNhMjI3NiIsIm5iZiI6MTY3ODI5OTcwNi43LCJzdWIiOiI2NDA4ZDIzYTAzZjBiNjAwZTliMDAzYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.z0y0zK0LEPbk9Dv4hgIwSV8-67LtfOJIt77Udxl1yi4",
      },
      body: JSON.stringify({
        session_id: sessionStorage.getItem("session_id"),
      }),
    }
  );
  console.log(response);
  console.log(await response.json());
};
