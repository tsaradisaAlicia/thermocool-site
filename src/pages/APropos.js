import { motion } from "framer-motion";
import { Users, Wrench, Leaf } from "lucide-react"; // Icônes modernes
import titre from "../assets/titre.png";

export default function APropos() {
  return (
    <section id="apropos" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Effet de fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative">
        {/* Titre avec image */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex justify-center items-center gap-3">
          À propos de THERMOCOOL TECHNOLOGY MADAGASCAR 
        </h2>

        {/* Texte principal */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-gray-700 text-lg leading-relaxed text-center mb-6"
        >
          Notre entreprise est spécialisée en{" "}
          <span className="font-semibold text-blue-700">
            froid & climatisation, ventilation mécanique contrôlée, plomberie, adduction et surpression d’eau,
            matériel de cuisine professionnelle
          </span>{" "}
          et bien plus encore. Nous proposons des solutions innovantes et adaptées aux besoins
          de nos clients dans différents secteurs.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-gray-700 text-lg leading-relaxed text-center mb-12"
        >
          Fondée en <span className="font-semibold">2011</span>, 
          <img 
            src={titre} 
            alt="THERMOCOOL TECHNOLOGY" 
            className="h-6 w-auto inline-block align-middle mx-1"
          /> 
          est dirigée par <span className="font-semibold">RANDRIAMANAMPISOA Falimanana</span>, 
          et met à disposition son expertise et son savoir-faire pour garantir confort, 
          sécurité et performance énergétique.
        </motion.p>

        {/* Cartes stylées avec icônes */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-2">+500 Clients</h3>
            <p className="text-gray-600 text-sm">Nous avons accompagné des centaines de clients satisfaits à travers divers projets.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-2">Expertise Technique</h3>
            <p className="text-gray-600 text-sm">Une équipe qualifiée et expérimentée pour assurer la réussite de vos installations.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Leaf className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-2">Énergie & Durabilité</h3>
            <p className="text-gray-600 text-sm">Nos solutions respectent l’environnement et optimisent la performance énergétique.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
