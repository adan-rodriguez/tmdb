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
            const search = e.target.search.value;
            e.target.search.value = "";
            navigate(`/search/${search}`);
          }}
        >
          <input
            type="text"
            name="search"
            className="text-black"
            placeholder="Search in TMDB"
          />
          <button>Search</button>
        </form>
        <Link to="/">Home</Link>
      </header>
      <main className="max-w-screen-2xl m-auto">
        <Outlet />
      </main>
    </>
  );
}
