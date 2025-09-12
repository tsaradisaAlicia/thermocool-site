import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Services from "./components/Services";
import Produits from "./pages/Produits";
import Secteurs from "./pages/Activites";
import References from "./pages/References";
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
        <Produits />
        <Secteurs />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
