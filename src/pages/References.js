import React from "react";
import { motion } from "framer-motion";
import lp from "../assets/reference/lp.jpg";
import rd from "../assets/reference/radisson.png";
import france from "../assets/reference/france.png";
import vivo from "../assets/reference/vivo.jpg";
import orange from "../assets/reference/orange.png";
import gastro from "../assets/reference/gastro.jpg";
import etoile from "../assets/reference/etoile.png";
import sacimem from "../assets/reference/sacimem.jpg";
import bovima from "../assets/reference/bovima.png";
import mabel from "../assets/reference/mabel.jpg";
import hopital from "../assets/reference/hopital.png";
import gastro2 from "../assets/reference/gastro2.jpg";
// Exemple de données (tu peux les remplacer par les tiennes)
const references = [
  {
    image: [lp],
    titre: "LEADER PRICE NOSYBE",
    details: "Armoire de commande et d'automatisation ",
  },
  {
    image: [rd],
    titre: "HOTEL RADISSON BLU",
    details: "Centrale de production d'eau glacée",
  },
  {
    image: [france],
    titre: "AMBASSADE DE FRANCE à ANTANANARIVO",
    details: "Système de Climatisation centralisée type VRV de Marque Aermec et VMC France Air de la rénovation du siège.",
  },
  {
    image: [vivo],
    titre: "VIVO ENERGY ANTANANARIVO",
    details: "Système de climatisation",
  },
  {
    image: [orange],
    titre: "TOUR ORANGE ANTANANARIVO",
    details: "Installation de Surpresseur Incendie",
  },
  {
    image: [gastro],
    titre: "La Gastronomie Pizza Analakely",
    details: "Matériels de cuisine",
  },
  {
    image: [etoile],
    titre: "HOTEL 5 ETOILES IVATO",
    details: "Désenfumage Cuisine ",
  },
  {
    image: [sacimem],
    titre: "SACIMEM ANTSIRABE",
    details: "Réseau vapeur",
  },
  {
    image: [bovima],
    titre: "BOVIMA FORT-DAUPHIN",
    details: "Centrale frigorifique avec compresseurs à vis",
  },
  {
    image: [mabel],
    titre: "MABEL ANTANANARIVO",
    details: "Ventilation mécanique pour assurer la protection des zones propres aux zones salles par pression différentielle",
  },
  {
    image: [hopital],
    titre: "HOPITAL IMERITSIATOSIKA",
    details: "Matériels de cuisine",
  },
  {
    image: [gastro2],
    titre: "La Gastronomie Pizza",
    details: "",
  },
  
];

const References = () => {
  return (
    <section id="references" className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 italic font-serif">
        Nos <span className="text-blue-600">références</span>
      </h2>
        {/* Texte en haut */}
        <div className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-4">
           Cette liste n’est pas exhaustive, nous avons plusieurs chantiers en cours de réalisation.
A part nos quelques réalisations suscitées, nous avons des dizaines de contrat de maintenance des plusieurs clients d’envergure (AFD,NEWREST MORAMANGA ET TAMATAVE, SHERRITT Moramanga, GRAPHOPRINT, JB USINE, Groupe TALYS, LEADER PRICE, LECOFRUIT, INSTITUT PASTEUR DE MADAGASCAR, PLUSIEURS GRANDS HOTELS,…)
          </p>
        </div>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={ref.image}
              alt={ref.titre}
              className="w-full h-64 object-cover"
            />

            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{ref.titre}</h3>
              <p className="text-sm mt-2">{ref.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
       
    </section>
  );
};

export default References;
