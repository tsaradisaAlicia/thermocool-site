import React from "react";
import { motion } from "framer-motion";
import afd from "../assets/reference/afd.jpg";
import lp1 from "../assets/reference/lp1.png";
import rd from "../assets/reference/rd.png";
//import france from "../assets/reference/france.png";
import vivo from "../assets/reference/vivo1.png";
import cfao from "../assets/reference/cfao.png";
import orange from "../assets/reference/orange1.png";
import gastro from "../assets/reference/gastro1.png";
//import etoile from "../assets/reference/etoile.png";
//import sacimem from "../assets/reference/sacimem.jpg";
//import bovima from "../assets/reference/bovima.png";
import mabel from "../assets/reference/mabel1.png";
import lecofruit from "../assets/reference/lecofruit.png";
import graphoprint from "../assets/reference/graphoprint.png";
//import hopital from "../assets/reference/hopital.png";
//import gastro2 from "../assets/reference/gastro2.jpg";
import colas from "../assets/reference/colas.png";
import habibo from "../assets/reference/habibo.jpg";
import luxoptica from "../assets/reference/luxoptica.jpg";
import vima from "../assets/reference/vima.png";
import ipm from "../assets/reference/ipm.png";


//Exemple de données (tu peux les remplacer par les tiennes)
const references = [
  {
    image: [afd],
    titre: "AFD ANTANANARIVO",
    
  },
  {
    image: [rd],
    titre: "HOTEL RADISSON BLU",
   
  },
  {
    image: [lp1],
    titre: "LEADER PRICE NOSYBE",
    
  },
  {
    image: [lecofruit],
    titre: "LECOFRUIT",
   
  },
  
  /*
  {
    image: [france],
    titre: "AMBASSADE DE FRANCE à ANTANANARIVO",
    details: "Système de Climatisation centralisée type VRV de Marque Aermec et VMC France Air de la rénovation du siège.",
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
  */
  
  {
    image: [vivo],
    titre: "VIVO ENERGY ANTANANARIVO",
   
  },
   {
    image: [cfao],
    titre: "CFAO ANTANANARIVO",
    
  },
  {
    image: [orange],
    titre: "TOUR ORANGE ANTANANARIVO",
    
  },
   {
    image: [graphoprint],
    titre: "GRAPHOPRINT ANTANANARIVO",
    
  },
  {
    image: [ipm],
    titre: "Institut Pasteur de Madagascar (IPM)",
   
  },  
  
  
  {
    image: [mabel],
    titre: "MABEL ANTANANARIVO",
   
  }, 
  {
    image: [colas],
    titre: "COLAS",
   
  },
  {
    image: [habibo],
    titre: "HABIBO Ifarihy Tanjombato",
   
  },
  {
    image: [luxoptica],
    titre: "LUXOPTICA ANTANANARIVO",
   
  }, 
  {
    image: [vima],
    titre: "VIMA ANTANANARIVO",
   
  },
  {
    image: [gastro],
    titre: "La Gastronomie Pizza Analakely",
   
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
Notre succès se mesure à la confiance que nos clients nous accordent. 
Découvrez les entreprises et organisations avec lesquelles nous avons bâti des partenariats solides.
          </p>
        </div>
        {/* Grille des références */}
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto px-6 max-w-6xl place-items-center">

  {references.map((ref, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-lg overflow-hidden shadow-lg w-40 h-40 flex items-center justify-center bg-white"
    >
      {/* Image */}
      <img
        src={ref.image}
        alt={ref.titre}
        className="max-w-[80%] max-h-[80%] object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-2 text-white">
        <h3 className="text-sm font-semibold">{ref.titre}</h3>
        <p className="text-xs mt-1">{ref.details}</p>
      </div>
    </motion.div>
  ))}
</div>

       
    </section>
  );
};

export default References;
