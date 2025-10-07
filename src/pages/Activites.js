import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clim0 from "../assets/climatisation&froid/clim0.jpg";
import clim1 from "../assets/climatisation&froid/clim1.jpg";
import clim2 from "../assets/climatisation&froid/clim2.png";
import clim3 from "../assets/climatisation&froid/clim3.jpg";
import clim4 from "../assets/climatisation&froid/clim4.jpg";
import clim5 from "../assets/climatisation&froid/clim5.jpg";
import clim6 from "../assets/climatisation&froid/clim6.jpg";
import clim7 from "../assets/climatisation&froid/clim7.jpg";
import froid from "../assets/climatisation&froid/froid.jpg";

import ventilation from "../assets/vmc/ventilation.png";
import vmc0 from "../assets/vmc/vmc0.jpg";
import des1 from "../assets/vmc/des1.png";
import vmc1 from "../assets/vmc/vmc1.jpg";
import des2 from "../assets/vmc/des2.jpg";
import vmc2 from "../assets/vmc/vmc2.jpg";
import des3 from "../assets/vmc/des3.jpg";                                                                  
import vmc3 from "../assets/vmc/vmc3.jpg";

import plomberie1 from "../assets/plomberie/plomberie1.jpeg";
import plomberie2 from "../assets/plomberie/plomberie2.png";
import plomberie3 from "../assets/plomberie/plomberie3.jpg";
import plomberie4 from "../assets/plomberie/plomberie4.jpg";

import incendie1 from "../assets/incendie/incendie1.jpg";
import incendie2 from "../assets/incendie/incendie2.png";

import cuisine0 from "../assets/cuisine/cuisine0.jpg";
import cuisine1 from "../assets/cuisine/cuisine1.jpg";
import cuisine2 from "../assets/cuisine/cuisine2.jpg";
import cuisine3 from "../assets/cuisine/cuisine3.png";
import cuisine4 from "../assets/cuisine/cuisine4.jpg";
import cuisine5 from "../assets/cuisine/cuisine5.png";
import cuisine6 from "../assets/cuisine/cuisine6.jpg";

const domaines = [
  {
    titre: "Froid & Climatisation",
    images: [clim0, clim1, clim2, clim3, clim4, clim5, clim6, clim7, froid],
    desc: [
      "Salles informatiques",
      "Salles blanches",
      "Chambres froides",
      "Blocs opératoires",
      "Bureaux, commerces, hôtels, restaurants",
      "Climatisation individuelle et centralisée"
    ],
  },
  {
    titre: "Ventilation Mécanique Contrôlée (VMC) et désenfumage",
    images: [ventilation, vmc0, des1, vmc1, des2, vmc2, des3, vmc3],
    desc: [
      "Locaux industriels",
      "Établissements recevant du public (ERP)",
      "Immeubles de grande hauteur (IGH)",
      "Locaux spécifiques"
      
    ],
  },

  {
    titre: "Plomberie",
    images: [plomberie1, plomberie2, plomberie3, plomberie4],
    desc: [
      "Adduction d’eau",
      "Surpression d’eau",
      "Traitement d’eau"
    ],
  },

  {
    titre: "Sécurité incendie",
    images: [incendie1, incendie2],
    desc: [
      "Groupes de surpression incendie"
    ],
  },
  {
    titre: "Grandes Cuisines",
    images: [cuisine0, cuisine1, cuisine2, cuisine3, cuisine4, cuisine5, cuisine6],
    desc: [
      "Matériels de cuisine professionnelle",
      "Liaison froide",
      "Liaison chaude"
    ],
  },
];

export default function Activites() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="activites" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 italic font-serif">
          Nos <span className="text-blue-600 italic font-serif">Domaines d’Activités</span>
        </h2>

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {domaines.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeIndex === i
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {d.titre}
            </button>
          ))}
        </div>

       {/* Contenu actif */}
<motion.div
  key={activeIndex}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-2xl shadow-xl p-6"
>
  <h3 className="text-2xl font-semibold text-blue-700 mb-6">
    {domaines[activeIndex].titre}
  </h3>

  {/* Flex zone : image + liste */}
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Diaporama */}
      <Slideshow images={domaines[activeIndex].images} />
      {/* Liste des détails */}
    <div className="flex-1">
      <ul className="text-gray-700 list-disc list-inside space-y-2">
        {domaines[activeIndex].desc.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}

// Composant Diaporama
function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
   <div className="relative mx-auto w-full max-w-3xl h-72 md:h-96 overflow-hidden rounded-xl shadow-md bg-white flex items-center justify-center">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt=""
          className={`absolute w-full h-full object-contain ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
      ))}

      {/* Petits points indicateurs */}
      <div className="absolute bottom-3 flex justify-center w-full gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>

  );
}

