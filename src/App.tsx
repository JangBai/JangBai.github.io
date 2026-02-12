import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Starfield from "./components/ui/Starfield";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Starfield />
      <main className="pt-24">
        <Home />
      </main>
    </div>
  );
}
