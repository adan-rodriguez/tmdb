import { FavoritesProvider } from "../contexts/favorites";
import { Header } from "../components/Header";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl m-auto">
        <FavoritesProvider>
          {children}
          {/* <Outlet /> */}
        </FavoritesProvider>
      </main>
    </>
  );
}
