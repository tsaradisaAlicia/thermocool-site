import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 italic font-serif drop-shadow-sm">Contactez<span className="text-blue-600 italic font-serif">-nous</span></h2>
        {/* Ligne décorative animée */}
        <motion.div
          initial={{ scaleX: 0 }}   
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-32 h-1 bg-blue-600 rounded-full mb-12"
        />
        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">Nous serons ravis d'échanger avec vous !</p>
        <ContactForm />
      </div>
    </section>
  );
}
