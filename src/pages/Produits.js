import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Produits() {
  const [openIndex, setOpenIndex] = useState(null);

  const produits = [
    {
      title: "Detente directe",
      description:
        "Split réversible ou froid seul, Multisplit, VRV, Rooftop, Armoire de précision",
    },
    {
      title: "Froid industriel",
      description: "Des équipements sur mesure",
    },
    {
      title: "Eau glacée",
      description: "Groupe d’eau glacée, Pompe à chaleur, Ventilo-convecteur, Centrale de traitement d’air (CTA)",
    },
    {
      title: "Hydraulique",
      description: "Pompe pour adduction et surpression d’eau",
    },
    {
      title: "Réseaux de gaines",
      description: "Conception et installation de réseaux aérauliques completsTraitement des ambiances d’air : VMC, Désenfumage",
    },
    {
      title: "Grande cuisine",
      description: "Réseau gaz butane - Matériels de préparation, cuisson, froid, distribution, laverie",
    },
    {
      title: "Buanderie",
      description: "Matériel de lavage, essorage, séchage, repassage, rangement",
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="produits" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          <span className="italic font-serif">
            Nos{" "}
            <span className="text-blue-600">
              produits
            </span>
          </span>
        </motion.h2>

        {/* Grille produits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {produits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border rounded-2xl shadow-sm p-6 flex justify-between items-start cursor-pointer hover:shadow-md transition"
              onClick={() => toggleIndex(index)}
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="ml-4 mt-1">
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-gray-500" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texte en bas */}
        <div className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-4">
            Soucieux d’assurer une technicité et une fiabilité irréprochables,
            nous proposons un éventail complet et innovant des prestations de
            service :
          </p>
          <p className="font-bold mb-6">
            ETUDES, FOURNITURES, INSTALLATION, SERVICES APRES VENTE, EXPERTISES
          </p>
          
        </div>
      </div>
    </section>
  );
}
