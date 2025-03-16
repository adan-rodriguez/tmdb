import { Outlet } from "react-router-dom";
import { FavoritesProvider } from "./contexts/favorites";
import { Header } from "./components/Header";

export function RootLayout() {
  return (
    <>
    <Header />
      <main className="max-w-screen-2xl m-auto">
        <FavoritesProvider>
          <Outlet />
        </FavoritesProvider>
      </main>
    </>
  );
}
