import { motion } from "framer-motion";
import { Calendar, Users, Award, CheckCircle } from "lucide-react";
import bureau1 from "../assets/bureau1.jpg";

export default function APropos() {
  return (
    <section id="apropos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 italic font-serif drop-shadow-sm"
        >
          À propos de <span className="text-blue-600 italic font-serif">Thermocool Technology</span>
        </motion.h2>
        {/* Ligne décorative animée */}
        <motion.div
          initial={{ scaleX: 0 }}   
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-32 h-1 bg-blue-600 rounded-full mb-12"
        />

        {/* Présentation générale (image + texte) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Image */}
          <motion.img
            src={bureau1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl shadow-lg"
          />

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-700 leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Présentation <span className="text-blue-600">générale</span>
            </h3>
            <p className="mb-4">
              Nos techniciens sont professionnels, nous sommes aptes à
              travailler même dans des milieux à atmosphères explosives. Dans ce sens,
              nous sommes capables de classer vos zones à risque d’explosions et à engager
              la démarche d’analyse de risque correspondante.
            </p>
            <p className="mb-4 border-l-4 border-blue-500 pl-4 italic">
              D’autre part, nous sommes dotés d’un Système de Management de la Qualité.
              À ce propos, nous sommes audités
              régulièrement par certains de nos clients.
              <br />
              Certains de nos techniciens ont reçu une formation sur la sécurité et la sûreté
              aéroportuaire et sont aptes à travailler même sur les zones très sensibles.
            </p>
            <p className="mb-4">
              Le respect des règles HSE est notre quotidien, et nous nous engageons à être
              un sous-traitant responsable. Ceci est possible grâce à un « ENCADREMENT SANS
              FAILLE ET RESPECT DES PROCÉDURES À TOUT NIVEAU ».
            </p>
            <p>
              Notre zone d’activité couvre tout le territoire national. Particulièrement,
              pour Nosy Be, Tamatave et Moramanga, nous avons une présence permanente d’une
              équipe technique.
            </p>
          </motion.div>
        </div>

        {/* Infos principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Calendar className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Création",
              text: "Fondée en 2011",
            },
            /*{
              icon: <User className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Gérant",
              text: "RANDRIAMANAMPISOA Falimanana",
            },
            */
            {
              icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Équipe",
              text: "+130 techniciens",
            },
            {
              icon: <Award className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Qualité",
              text: "Système Management de la Qualité",
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

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-xl p-8 text-center mb-12"
        >
          <p className="text-lg leading-relaxed">
            Thermocool Technology met tout son savoir-faire pour assurer des prestations
            de qualité et s'engage à accompagner ses clients pas à pas, de l’étude jusqu’à
            la réussite de leurs projets.
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
