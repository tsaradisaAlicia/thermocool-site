import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Hammer, Wrench } from "lucide-react";

// Import des images (diaporamas)
//import etude0 from "../assets/etude/etude0.jpg";
import etude1 from "../assets/etude/etude1.jpg";
import etude2 from "../assets/etude/etude2.jpg";
import etude3 from "../assets/etude/etude3.jpg";
import etude4 from "../assets/etude/etude4.jpg";

//import install0 from "../assets/installation/installation0.jpg";
//import install1 from "../assets/installation/installation1.jpeg";
import install2 from "../assets/installation/installation2.jpg";
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
    images: [ install2, install3, install4],
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
    <section id="service" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 italic font-serif">
          Prestations de <span className="text-blue-600 italic font-serif">Service</span>
        </h2>
        {/* Paragraphe intro */}
        <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Confiez vos installations aux <span className="font-semibold text-blue-600">vrais professionnels</span> :
          notre équipe vous accompagne avec expertise, de la conception à la maintenance.
        </p>
        {/* Layout en 2 colonnes */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Colonne gauche - Boutons */}
          <div className="flex flex-col gap-4 md:col-span-1">
            {prestations.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`px-6 py-3 rounded-lg font-semibold text-left transition ${
                  activeIndex === i
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {p.titre}
              </button>
            ))}
          </div>

          {/* Colonne droite - Contenu */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:col-span-3"
          >
            {/* Paragraphe spécifique au service */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-3 p-4 mb-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 shadow-sm"
            >
              {/* Icône dynamique selon le service */}
              {activeIndex === 0 && <Lightbulb className="text-blue-600 w-20 h-6 mt-1" />}
              {activeIndex === 1 && <Hammer className="text-blue-600 w-20 h-6 mt-1" />}
              {activeIndex === 2 && <Wrench className="text-blue-600 w-6 h-6 mt-1" />}

              <p className="text-gray-700 text-base md:text-lg italic">
                {prestations[activeIndex].description}
              </p>
            </motion.div>
            {/* Diaporama */}
            <Slideshow images={prestations[activeIndex].images} />

           {/* Liste des détails */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {prestations[activeIndex].details.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:shadow-md transition"
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
