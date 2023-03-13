import { Link, Outlet } from "react-router-dom";
import logo from "./assets/images/logo-tmdb.svg";

export default function RootLayout() {
  return (
    <>
      <header className="max-w-screen-2xl m-auto p-4">
        <img src={logo} alt="Logo de TMDB" className="w-48" />
        <input type="search" name="search" id="search" className="text-black" />
        <Link to="/">Home</Link>
      </header>
      <main className="max-w-screen-2xl m-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
