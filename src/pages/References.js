import React from "react";
import { motion } from "framer-motion";
import afd from "../assets/reference/afd.jpg";
import lp1 from "../assets/reference/lp1.png";
import rd from "../assets/reference/rd.png";
import vivo from "../assets/reference/vivo1.png";
import cfao from "../assets/reference/cfao.png";
import orange from "../assets/reference/orange1.png";
import gastro from "../assets/reference/gastro1.png";
import mabel from "../assets/reference/mabel1.png";
import lecofruit from "../assets/reference/lecofruit.png";
import graphoprint from "../assets/reference/graphoprint.png";
import colas from "../assets/reference/colas.png";
import habibo from "../assets/reference/habibo.jpg";
import luxoptica from "../assets/reference/luxoptica.jpg";
import vima from "../assets/reference/vima.png";
import ipm from "../assets/reference/ipm.png";
import ambatovy from "../assets/reference/ambatovy.jpg";
import etoile from "../assets/reference/5ETOILES.jpg";
import ece from "../assets/reference/ece.png";
import materauto from "../assets/reference/materauto.png";
import bovima from "../assets/reference/bovima.png";
import banque from "../assets/reference/banque.png";

// Tableau des logos
const references = [
  afd, rd, lp1, lecofruit, vivo, cfao, orange,materauto,bovima, banque,
  graphoprint, ipm, mabel, colas, habibo, luxoptica, vima, gastro, ambatovy, etoile, ece
];

const References = () => {
  return (
    <section id="references" className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 italic font-serif drop-shadow-sm">
          Nos <span className="text-blue-600 italic font-serif">références</span>
        </h2>
        {/* Ligne décorative animée */}
        <motion.div
          initial={{ scaleX: 0 }}   
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-32 h-1 bg-blue-600 rounded-full mb-12"
        />

        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          Notre succès se mesure à la confiance que nos clients nous accordent.  
          Découvrez les entreprises et organisations avec lesquelles nous avons bâti des partenariats solides.
        </p>
      </div>

      {/* Bande défilante */}
      <div className="relative w-full overflow-hidden">
        {/* Bande animée */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* On double la liste pour que le défilement soit infini */}
          {[...references, ...references].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-32 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={logo}
                alt="logo"
                className="w-28 h-28 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Effet de fondu sur les bords */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default References;
