import { useState } from "react";
import { motion } from "framer-motion";

import clim0 from "../assets/climatisation&froid/clim0.jpg";
import clim1 from "../assets/climatisation&froid/clim1.jpg";
import clim2 from "../assets/climatisation&froid/clim2.png";
import clim3 from "../assets/climatisation&froid/clim3.jpg";
import clim4 from "../assets/climatisation&froid/clim4.jpg";
import clim5 from "../assets/climatisation&froid/clim5.jpg";
import clim6 from "../assets/climatisation&froid/clim6.jpg";
import clim7 from "../assets/climatisation&froid/clim7.jpg";

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
    images: [clim0, clim1, clim2, clim3, clim4, clim5, clim6, clim7],
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
    images: [plomberie1, plomberie2],
    desc: [
      "Adduction d’eau",
      "Surpression d’eau",
      "Traitement d’eau",
      "Installation réseaux sanitaires",
      "Maintenance et dépannage",
      "Systèmes d’eau chaude"
    ],
  },
  {
    titre: "Sécurité incendie",
    images: [incendie1, incendie2],
    desc: ["Groupes de surpression incendie"],
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

  const isSmallSection = 
  domaines[activeIndex].titre === "Plomberie" || 
  domaines[activeIndex].titre === "Sécurité incendie";

  return (
    <section id="activites" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 italic font-serif">
          Nos <span className="text-blue-600">Domaines d’Activités</span>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="mx-auto w-32 h-1 bg-blue-600 rounded-full mb-12"
        />

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {domaines.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full ${
                activeIndex === i
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-blue-100"
              }`}
            >
              {d.titre}
            </button>
          ))}
        </div>

        {/* Contenu */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">
            {domaines[activeIndex].titre}
          </h3>

          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Images */}
            <ImageGrid 
              images={domaines[activeIndex].images} 
              isSmallSection={isSmallSection}
            />

            {/* Texte */}
            <div className={isSmallSection ? "md:w-1/3 text-lg" : "flex-1"}>
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

// 🔥 Composant ImageGrid amélioré
function ImageGrid({ images, isSmallSection }) {
  return (
    <div
      className={`
        grid gap-4 w-full
        ${
          isSmallSection
            ? "grid-cols-1 md:grid-cols-2 md:w-2/3"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-1/2"
        }
      `}
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
          <img
            src={src}
            alt=""
            className={`
              w-full object-cover
              ${
                isSmallSection
                  ? "h-64 md:h-80"   // 🔥 GRANDES images
                  : "h-40 md:h-48"
              }
            `}
          />
        </motion.div>
      ))}
    </div>
  );
}