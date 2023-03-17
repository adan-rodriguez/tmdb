import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/images/logo-tmdb.svg";
import { search_type } from "./utils/search_type";

export function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <header className="max-w-screen-2xl m-auto p-4">
        <img src={logo} alt="Logo de TMDB" className="w-48" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const query = e.target.search.value;
            e.target.search.value = "";
            switch (e.target.search_type.value) {
              case search_type.movies:
                navigate(`/search/movies/${query}`);
                break;

              case search_type.people:
                navigate(`/search/people/${query}`);
                break;

              case search_type.tv_shows:
                navigate(`/search/tv_shows/${query}`);
                break;

              default:
                break;
            }
          }}
        >
          <select className="text-black" name="search_type">
            <option selected value={search_type.movies}>
              Movies
            </option>
            <option value={search_type.people}>People</option>
            <option value={search_type.tv_shows}>Tv Shows</option>
          </select>
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
