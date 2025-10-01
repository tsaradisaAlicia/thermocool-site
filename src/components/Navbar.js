import { useState } from "react";
import { Menu, X, Search, Mail, Phone, Clock } from "lucide-react"; 
import marque from "../assets/marque.png";
import titre from "../assets/titre.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("accueil"); // section active par défaut

  //Fonction active menu
  const handleClick = (section) => {
      setActiveSection(section);
      setMenuOpen(false); // ferme le menu mobile
    };
  // Fonction recherche
  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;

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
        foundNode = node.parentElement;
        break;
      }
    }

    if (foundNode) {
      foundNode.scrollIntoView({ behavior: "smooth", block: "center" });
      foundNode.style.background = "yellow";
      setTimeout(() => {
        foundNode.style.background = "";
      }, 2000);
    } else {
      alert("Aucun résultat trouvé !");
    }
  };

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-20">
      {/* Bandeau supérieur */}
      <div className="bg-white text-sm text-gray-700 py-2 px-6 flex justify-between items-center">
          <div className="bg-white text-sm text-gray-700 py-2 px-6 flex justify-center items-center">
            {/* Logo au centre */}
            <div className="flex items-center space-x-2">
              <img src={marque} alt="Logo marque" className="h-10 w-auto" />
              <img src={titre} alt="Logo titre" className="h-8 w-auto" />
            </div>
          </div>
        {/* Infos contact */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-1 text-gray-500 text-xs">
              <Mail size={16} className="text-blue-600" />
              <span className="font-bold text-blue-900">E-mail :</span>
            </div>
            <a href="mailto:contact@thermocool-thechnology.com" className="font-medium">
              contact@thermocool-thechnology.com
            </a>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-1 text-gray-500 text-xs">
              <Clock size={16} className="text-blue-600" />
              <span className="font-bold text-blue-900">Horaires :</span>
            </div>
            <span className="font-medium">Lun - Ven : 7h30 à 16h30</span>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-1 text-gray-500 text-xs">
              <Phone size={16} className="text-blue-600" />
              <span className="font-bold text-blue-900">Téléphones :</span>
            </div>
            <a href="tel:+261346093103" className="font-medium">
              +261 34 60 931 03 / +261 34 21 310 81
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Zone de recherche au centre */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 justify-center px-4"
        >
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

        {/* Menus + Burger */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {[
              { id: "accueil", label: "Accueil" },
              { id: "apropos", label: "À propos" },
              { id: "service", label: "Prestations de Service" },
              { id: "produits", label: "Nos produits" },
              { id: "activites", label: "Activités" },
              { id: "references", label: "Nos références" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`px-4 py-2 transition ${
                    activeSection === item.id
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => handleClick("contact")}
                className={`px-4 py-2 rounded-lg shadow text-center transition ${
                  activeSection === "contact"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Nous Contacter
              </a>
            </li>
          </ul>

          {/* Burger button */}
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

      {/* Menu mobile */}
         {menuOpen && (
        <div className="bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            {[
              { id: "accueil", label: "Accueil" },
              { id: "apropos", label: "À propos" },
              { id: "service", label: "Prestations de Service" },
              { id: "produits", label: "Nos produits" },
              { id: "activites", label: "Activités" },
              { id: "references", label: "Nos références" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`px-2 py-1 rounded ${
                    activeSection === item.id
                      ? "text-blue-600 font-bold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
