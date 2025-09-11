import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Services from "./components/Services";
import Secteurs from "./pages/Activites";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Accueil />
        <APropos />
        <Services />
        <Secteurs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
