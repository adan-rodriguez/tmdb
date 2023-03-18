import { Link, Outlet } from "react-router-dom";
import logo from "./assets/images/logo-tmdb.svg";
import useSumbitSearch from "./hooks/useSumbitSearch";
import { search_type } from "./utils/search_type";

export function RootLayout() {
  const { submitSearch } = useSumbitSearch();

  return (
    <>
      <header className="max-w-screen-2xl m-auto p-4 flex justify-between">
        <Link to="/" title="Home">
          <img
            src={logo}
            alt="Logo de TMDB"
            style={{ minWidth: "192px" }}
            className="w-48"
          />
        </Link>
        <form
          className="text-black text-sm tracking-wide"
          onSubmit={submitSearch}
        >
          <select
            className="h-7 px-2 focus:outline-0 tracking-wide rounded-l-2xl"
            name="search_type"
          >
            <option selected value={search_type.movies}>
              Movies
            </option>
            <option value={search_type.people}>People</option>
            <option value={search_type.tv_shows}>Tv Shows</option>
          </select>
          <input
            className="h-7 px-3 focus:outline-0 w-96 tracking-wide"
            type="text"
            name="search"
            placeholder="Search in TMDB"
          />
          <button
            className="bg-light-blue font-normal h-7 px-3 tracking-wide rounded-r-2xl"
            type="submit"
          >
            Search
          </button>
        </form>
      </header>
      <main className="max-w-screen-2xl m-auto">
        <Outlet />
      </main>
    </>
  );
}
