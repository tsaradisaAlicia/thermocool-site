import { motion } from "framer-motion";
import { Calendar, User, Users, Award, CheckCircle } from "lucide-react";

export default function APropos() {
  return (
    <section id="apropos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          À propos de <span className="text-blue-600">Thermocool Technology</span>
        </motion.h2>

        {/* Infos principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Calendar className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Création",
              text: "Fondée en 2011",
            },
            {
              icon: <User className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Gérant",
              text: "RANDRIAMANAMPISOA Falimanana",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Équipe",
              text: "+150 techniciens certifiés ATEX (INERIS)",
            },
            {
              icon: <Award className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Qualité",
              text: "Système Management de la Qualité ISO 9001",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Paragraphe mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-xl p-8 text-center mb-12"
        >
          <p className="text-lg leading-relaxed">
            Thermocool Technology met tout son savoir-faire pour assurer des
            prestations de qualité et s'engage à accompagner ses clients pas à
            pas, de l’étude jusqu’à la réussite de leurs projets.
          </p>
        </motion.div>

        {/* Objectifs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Notre Objectif est de vous proposer:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Une installation aux normes",
              "Avec exploitation rationnelle",
              "Optimisation de vos budgets",
              "Respect de l’environnement",
            ].map((objectif, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white rounded-xl shadow-md p-4"
              >
                <CheckCircle className="text-blue-600 w-6 h-6 mr-3" />
                <span className="text-gray-700 font-medium">{objectif}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
