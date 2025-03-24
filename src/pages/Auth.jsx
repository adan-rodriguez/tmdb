import { API_KEY_TMDB, BASE_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

export function Auth() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const createRequestToken = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY_TMDB}`
      );
      const result = await response.json();
      console.log(result);

      if (!result.success) {
        setError(result);
        return;
      }

      setData(result);
    };

    createRequestToken();
  }, []);

  const handleRedirect = () => {
    window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${BASE_URL}/approved`;
  };

  return (
    <div>
      <h1>Auth</h1>
      {data && (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button onClick={handleRedirect}>Autenticar con TMDB</button>
        </>
      )}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {!data && !error && <p>Cargando...</p>}
    </div>
  );
}
