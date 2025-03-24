import { Link } from "react-router-dom";
import { useMainSearch } from "../hooks/useMainSearch";

export function Header() {
  const { search } = useMainSearch();

  return (
    <header className="max-w-screen-2xl m-auto p-4 flex flex-wrap items-center justify-between gap-5">
      <Link to="/" title="Home">
        <img
          src="/tmdb.svg"
          alt="Logo de TMDB"
          style={{ minWidth: "192px" }}
          className="w-48 aspect-[192/25]"
        />
      </Link>
      <search className="w-full max-w-screen-sm">
        <form className="text-black flex" onSubmit={search}>
          <select
            className="h-7 px-2 focus:outline-0 rounded-l-2xl"
            name="searchType"
          >
            <option value="movies">Movies</option>
            <option value="people">People</option>
            <option value="tv">Tv</option>
          </select>
          <input
            className="h-7 px-3 focus:outline-0 grow"
            type="search"
            name="search"
            placeholder="Search in TMDB"
          />
          <button
            className="bg-light-blue h-7 px-3 rounded-r-2xl"
            type="submit"
          >
            Search
          </button>
        </form>
      </search>
    </header>
  );
}
