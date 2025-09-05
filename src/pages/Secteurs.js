import { motion } from "framer-motion";
import { Building2, Factory, Leaf } from "lucide-react"; // icônes modifiables

export default function Secteurs() {
  const secteurs = [
    { 
      titre: "Secteur 1", 
      desc: "Description de votre premier secteur d'activité",
      icon: <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    },
    { 
      titre: "Secteur 2", 
      desc: "Description de votre deuxième secteur d'activité",
      icon: <Factory className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    },
    { 
      titre: "Secteur 3", 
      desc: "Description de votre troisième secteur d'activité",
      icon: <Leaf className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    },
  ];

  return (
    <section
      id="secteurs"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Dégradé doux en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          Nos Secteurs d’Activités
        </h2>

        {/* Cartes secteurs */}
        <div className="grid md:grid-cols-3 gap-10">
          {secteurs.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition"
            >
              {s.icon}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {s.titre}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
