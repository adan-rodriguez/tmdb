import { Link } from "react-router-dom";
import { useMainSearch } from "../hooks/useMainSearch";

export function Header() {
    const { search } = useMainSearch();

    return (
        <header className="max-w-screen-2xl m-auto p-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-5">
        <Link to="/" title="Home">
          <img
            src="/tmdb.svg"
            alt="Logo de TMDB"
            style={{ minWidth: "192px" }}
            className="w-48"
          />
        </Link>
        <search>
          <form
            className="text-black text-sm tracking-wide flex w-full max-w-screen-md"
            onSubmit={search}
          >
            <select
              className="h-7 px-2 focus:outline-0 tracking-wide rounded-l-2xl"
              name="search_type"
            >
              <option value="movies">
                Movies
              </option>
              <option value="people">People</option>
              <option value="tv_shows">Tv Shows</option>
            </select>
            <input
              className="h-7 px-3 focus:outline-0 tracking-wide grow"
              type="search"
              name="search"
              placeholder="Search in TMDB"
            />
            {/*<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="search"
            >
            <path
            fill="var(--color, #fff)"
            d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z"
            />
            </svg>*/}
            <button
              className="bg-light-blue font-normal h-7 px-3 tracking-wide rounded-r-2xl"
              type="submit"
            >
              Search
            </button>
          </form>
        </search>
      </header>
    )
}