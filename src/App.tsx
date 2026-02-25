import Header from "@/components/layout/Header";
import Home from "@/pages/home/Home";
import Starfield from "@/components/ui/Starfield";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <>
      <Starfield />
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <main className="min-h-screen">
          <Home />
        </main>
      </div>
      <Footer />
    </>
  );
}
