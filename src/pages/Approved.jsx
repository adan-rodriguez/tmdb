import { API_KEY_TMDB } from "@/utils/constants";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Approved() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const request_token = searchParams.get("request_token");
  const approved = searchParams.get("approved");

  useEffect(() => {
    if (!approved) {
      navigate("/auth");
      return;
    }
    console.log({ request_token, approved });
    const createSession = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY_TMDB}&request_token=${request_token}`
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ request_token }),
        // }
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        const response = await fetch(
          `https://api.themoviedb.org/3/account?api_key=${API_KEY_TMDB}&session_id=${result.session_id}`
        );

        const accountDetails = await response.json();
        console.log(accountDetails);
      }
    };

    createSession();
    // navigate("/account");
  }, []);

  return (
    <div>
      <h1>{approved ? "Approved" : "Denied"}</h1>
    </div>
  );
}
