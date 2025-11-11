import { useState} from "react";
import { motion } from "framer-motion";
import { Lightbulb, Hammer, Wrench } from "lucide-react";

// Import des images (maintenues)
//import etude0 from "../assets/etude/etude0.jpg";
import etude1 from "../assets/etude/etude1.jpg";
import etude2 from "../assets/etude/etude2.jpg";
import etude3 from "../assets/etude/etude3.jpg";
import etude4 from "../assets/etude/etude4.jpg";

//import install0 from "../assets/installation/installation0.jpg";
//import install1 from "../assets/installation/installation1.jpeg";
import cuisine0 from "../assets/cuisine/cuisine0.jpg";
import install5 from "../assets/installation/installation5.jpg";
import install3 from "../assets/installation/installation3.jpg";
import install4 from "../assets/installation/installation4.jpg";

import maint0 from "../assets/maintenance/maintenance0.png";
import maint1 from "../assets/maintenance/maintenance1.jpg";
import maint2 from "../assets/maintenance/maintenance2.jpg";
import maint3 from "../assets/maintenance/maintenance3.jpg";
//import maint4 from "../assets/maintenance/maintenance4.jpg";
//import maint5 from "../assets/maintenance/maintenance5.jpg";
//import maint6 from "../assets/maintenance/maintenance6.jpg";

const prestations = [
  {
    titre: "Études - Conception",
    description: "La réussite du projet commence par une étude technique fiable. Ainsi, après l’analyse et compréhension des besoins, évaluation des contraintes, nous proposons des solutions sur mesure tout en respectant les exigences réglementaires en établissant des notes de calcul et élaborant des plans avec conception 3D, avec un budget en ressources et matériels.",
    images: [etude1, etude3, etude2, etude4],
    details: [
      "Études techniques",
      "Estimation des coûts des ouvrages",
      "Dossiers d’exécution",
      "Dossiers d’œuvres exécutées",
      "Audit et expertise",
    ],
  },
  {
    titre: "Réalisation",
    description: "Afin de garantir la qualité, la sécurité et l’efficacité du projet, nous assurons la réalisation des travaux suivant les règles de l’art conformément aux conceptions. L’assurance et suivi de la qualité sont notre préoccupation permanente. Les installations sont soumises à des tests de conformités après une mise en service et réglage pointus.",
    images: [ cuisine0, install5, install3, install4],
    details: [
      "Installation des équipements",
      "Mise en service des équipements",
      "Mise au point des installations",
      "Rénovation",
    ],
  },
  {
    titre: "Maintenance - Dépannage",
    description: "Nous garantissons la durabilité et la performance de vos installations grâce à nos services de maintenance et de dépannage.",
    images: [maint0, maint1, maint2, maint3],
    details: [
      "Contrats d’entretien: maintenance préventive ou curative",
      "Service après-vente",
      "Diagnostics, solutions",
      "Remise en service des installations",
      "Reconversion avec nouveaux fluides écologiques",
    ],
  },
];

export default function Prestations() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="service" className="snow-bg py-20 relative">

      <div className="relative z-10 w-full px-10 md:px-16 lg:px-24">
        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 italic font-serif drop-shadow-sm"
        >
          Prestations de <span className="text-blue-600 italic font-serif">Service</span>
        </motion.h2>

        {/* Ligne décorative animée */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-32 h-1 bg-blue-600 rounded-full mb-12"
        />

        {/* Paragraphe intro */}
        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          Confiez vos installations aux{" "}
          <span className="font-semibold text-blue-600">vrais professionnels</span> :
          notre équipe vous accompagne avec expertise, de la conception à la maintenance.
        </p>

        {/* Layout en 2 colonnes */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Colonne gauche - Boutons */}
          <div className="flex flex-col gap-4 md:col-span-1">
            {prestations.map((p, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveIndex(i)}
                className={`px-6 py-3 rounded-xl font-semibold text-left transition-all duration-300 shadow-sm ${
                  activeIndex === i
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {p.titre}
              </motion.button>
            ))}
          </div>

          {/* Colonne droite - Contenu */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:col-span-3 border border-blue-100"
          >
            {/* Paragraphe spécifique au service */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-3 p-4 mb-6 rounded-lg bg-blue-50/70 border-l-4 border-blue-600 shadow-sm"
            >
              {activeIndex === 0 && <Lightbulb className="text-blue-600 w-6 h-6 mt-1" />}
              {activeIndex === 1 && <Hammer className="text-blue-600 w-6 h-6 mt-1" />}
              {activeIndex === 2 && <Wrench className="text-blue-600 w-6 h-6 mt-1" />}

              <p className="text-gray-700 text-base md:text-lg italic">
                {prestations[activeIndex].description}
              </p>
            </motion.div>

            {/* GRILLE D'IMAGES (NOUVEAU) */}
            <ImageGrid images={prestations[activeIndex].images} />
            {/* FIN GRILLE D'IMAGES */}

            {/* Liste des détails */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {prestations[activeIndex].details.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-gray-200 hover:bg-blue-50 hover:shadow-md transition"
                >
                  <span className="text-blue-600 text-lg">✔</span>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}

// ----------------------------------------------------------------------
// NOUVEAU Composant pour la grille d'images
// ----------------------------------------------------------------------

function ImageGrid({ images }) {
  // Définir la structure de la grille en fonction du nombre d'images
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2", // 2x2 pour 4 images
    5: "grid-cols-3", // Gère le cas où la dernière image prend plus de place si elle est seule
    6: "grid-cols-3", // 3x2 pour 6 images
  };

  const currentGridClass = gridClasses[images.length] || "grid-cols-2"; // Fallback à 2 colonnes

  return (
    <div
      className={`mx-auto w-full max-w-4xl grid ${currentGridClass} gap-3 sm:gap-4 overflow-hidden rounded-xl shadow-xl bg-white p-2`}
    >
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`Image de prestation ${i + 1}`}
          className={`w-full h-36 sm:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
            // Ajustement spécifique pour 5 images (la 5ème peut s'étendre sur deux ou trois colonnes pour centrer)
            images.length === 5 && i === 4 ? "col-span-full sm:col-span-3 mx-auto" : ""
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------------------------
// L'ancien composant Slideshow n'est plus utilisé et a été remplacé par ImageGrid.
// Il a été retiré du code complet.
// ----------------------------------------------------------------------