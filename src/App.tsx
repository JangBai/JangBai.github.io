import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Starfield from "./components/ui/Starfield";
// import Test from "./test";

export default function App() {
  return (
    <>
      <Starfield />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Header />
        <main className="min-h-screen">
          <Home />
          {/* <Test /> */}
        </main>
      </div>
    </>
  );
}
