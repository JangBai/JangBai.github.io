import Header from "@/components/layout/Header";
import Home from "@/pages/home/Home";
import Starfield from "@/components/ui/Starfield";
import Footer from "@/components/layout/Footer";
import TopButton from "@/components/ui/TopButton";
import { useLenis } from "@/hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <>
      <Starfield />
      <TopButton />
      <Header />
      <main className="min-h-screen">
        <Home />
      </main>
      <Footer />
    </>
  );
}
