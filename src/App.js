import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Secteurs from "./pages/Secteurs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Accueil />
        <APropos />
        <Secteurs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
