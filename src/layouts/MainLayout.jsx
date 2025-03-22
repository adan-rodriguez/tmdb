import { Footer } from "@/components/Footer";
import { Header } from "../components/Header";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl m-auto">{children}</main>
      <Footer />
    </>
  );
}
