import { redirectToTMDB } from "@/lib/auth";

export function LoginPage() {
  return (
    <div>
      <h1>Auth</h1>

      <button onClick={redirectToTMDB}>Autenticar con TMDB</button>
    </div>
  );
}
