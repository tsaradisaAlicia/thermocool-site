import { useState } from "react";
import { Menu, X, Mail, Phone, Clock, Home, Info, Wrench, Box, Activity, Star, Send, Search } from "lucide-react";
import marque from "../assets/marque.png";
import titre from "../assets/titre.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
  e.preventDefault();
  const q = searchTerm.trim().toLowerCase();
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


  const navItems = [
    { id: "accueil", label: "Accueil", icon: <Home size={18} /> },
    { id: "apropos", label: "À propos", icon: <Info size={18} /> },
    { id: "service", label: "Prestations", icon: <Wrench size={18} /> },
    { id: "produits", label: "Produits", icon: <Box size={18} /> },
    { id: "activites", label: "Activités", icon: <Activity size={18} /> },
    { id: "references", label: "Références", icon: <Star size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-30 shadow-md">
      {/* Bandeau supérieur blanc */}
      <div className="bg-white text-sm text-gray-700 py-2 px-6 flex justify-between items-center border-b border-gray-200">
        {/* Logo centré */}
        <div className="flex flex-col items-center text-center mx-auto">
          <div className="flex items-center space-x-2">
            <img src={marque} alt="Logo marque" className="h-12 w-auto" />
            <img src={titre} alt="Logo titre" className="h-10 w-auto" />
          </div>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-sky-500" />
            <span>contact@thermocool-mg.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-sky-500" />
            <span>Lun - Ven : 7h30 à 16h30</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-sky-500" />
            <span>+261 34 60 931 03 / +261 34 21 310 81</span>
          </div>
        </div>
      </div>

      {/* Barre principale avec dégradé bleu */}
      <div className="bg-gradient-to-r from-blue-700 to-sky-500">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Liens */}
          <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                    activeSection === item.id
                      ? "bg-white text-sky-600 font-semibold shadow"
                      : "hover:bg-white/20"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Barre de recherche */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-white rounded-full shadow-sm px-3 py-1.5 w-72"
          >
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow outline-none text-gray-700 text-sm placeholder-gray-400"
            />
            <button type="submit" className="text-sky-600 hover:text-sky-700">
              <Search size={18} />
            </button>
          </form>

          {/* Bouton contact */}
          <a
            href="#contact"
            onClick={() => handleClick("contact")}
            className="hidden md:block bg-white text-sky-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-sky-100 transition"
          >
            <div className="flex items-center gap-2">
              <Send size={16} />
              <span>Nous Contacter</span>
            </div>
          </a>

          {/* Burger mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="bg-sky-100 text-sky-700 px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`block py-2 rounded-lg ${
                  activeSection === item.id
                    ? "bg-white text-sky-600 font-semibold"
                    : "hover:bg-sky-200"
                }`}
              >
                {item.label}
              </a>
            ))}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-full shadow-sm px-3 py-1.5 mt-3"
            >
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow outline-none text-gray-700 text-sm placeholder-gray-400"
              />
              <button type="submit" className="text-sky-600 hover:text-sky-700">
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
