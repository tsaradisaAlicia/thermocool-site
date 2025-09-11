import { useState } from "react";
import { Menu, X, Search } from "lucide-react"; 
import marque from "../assets/marque.png";
import titre from "../assets/titre.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Fonction recherche
const handleSearch = (e) => {
  e.preventDefault();
  const q = query.trim().toLowerCase();
  if (!q) return;

  // Chercher tous les éléments de texte
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let foundNode = null;
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.toLowerCase().includes(q)) {
      foundNode = node.parentElement; // on prend l'élément qui contient le texte
      break;
    }
  }

  if (foundNode) {
    foundNode.scrollIntoView({ behavior: "smooth", block: "center" });

    // On peut aussi mettre un petit highlight temporaire
    foundNode.style.background = "yellow";
    setTimeout(() => {
      foundNode.style.background = "";
    }, 2000);
  } else {
    alert("Aucun résultat trouvé !");
  }
};

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo gauche */}
        <div className="flex items-center space-x-2">
          <img src={marque} alt="Logo marque" className="h-10 w-auto" />
          <img src={titre} alt="Logo titre" className="h-8 w-auto" />
        </div>

        {/* Zone de recherche au centre */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 justify-center px-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Rechercher..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </form>

        {/* Menus + Burger à droite */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#accueil" className="hover:text-blue-600">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-blue-600">À propos</a></li>
            <li><a href="#service" className="hover:text-blue-600">Prestations de Service</a></li>
            <li><a href="#activites" className="hover:text-blue-600">Activités</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Bouton burger (toujours visible maintenant) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <X size={28} className="text-gray-700" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Menu déroulant (mobile) */}
      {menuOpen && (
        <div className="bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a></li>
            <li><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a></li>
            <li><a href="#service" onClick={() => setMenuOpen(false)}>Prestations de Service</a></li>
            <li><a href="#secteurs" onClick={() => setMenuOpen(false)}>Activités</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
