import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/images/logo-tmdb.svg";

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <header className="max-w-screen-2xl m-auto p-4">
        <img src={logo} alt="Logo de TMDB" className="w-48" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${e.target.search.value}`);
          }}
        >
          <input type="text" name="search" id="search" className="text-black" />
          <button>Search</button>
        </form>
        <Link to="/">Home</Link>
      </header>
      <main className="max-w-screen-2xl m-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
