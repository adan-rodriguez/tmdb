import { createSession } from "@/lib/auth";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function AuthPage() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const request_token = searchParams.get("request_token");
  const approved = searchParams.get("approved"); // approved = "true" or denied = "true"

  useEffect(() => {
    if (!request_token || approved !== "true") {
      navigate("/login");
      return;
    }

    createSession(request_token)
      .then((result) => {
        if (!result.success) {
          navigate("/login");
          return;
        }
        sessionStorage.setItem("session_id", result.session_id);
        navigate("/account");
      })
      .catch(() => {
        navigate("/login");
        return;
      });
  }, []);

  return (
    <div>
      <h1>Authenticated...</h1>
    </div>
  );
}
