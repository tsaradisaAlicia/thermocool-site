import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo_thermocool.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ----------------------------------------------------------------------
// NOUVEAU: Import de l'image de fond
import fondContact from "../assets/fond_contact.jpg";
// ----------------------------------------------------------------------

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fezkdwo", // <-- ton Service ID
        "template_kftp3ya", // <-- ton Template ID
        form.current,
        "0vQUtlRodf9J46YdX" // <-- ta Public Key
      )
      .then(
        () => {
          toast.success("✅ Votre message a été envoyé avec succès !", {
            position: "top-right",
            autoClose: 4000,
          });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("❌ Une erreur est survenue. Veuillez réessayer.", {
            position: "top-right",
            autoClose: 4000,
          });
        }
      );
  };

  return (
    // ----------------------------------------------------------------------
    // MODIFICATION ICI: Utilisation de l'image comme fond
    // ----------------------------------------------------------------------
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center bg-fixed relative" // bg-fixed pour un effet parallax léger
      style={{ backgroundImage: `url(${fondContact})` }}
    >
      {/* Overlay pour améliorer la lisibilité du texte blanc */}
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div> 

      <div className="container mx-auto px-6 max-w-6xl relative z-10"> {/* z-10 pour que le contenu soit au-dessus de l'overlay */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Section Infos de contact (Gauche) */}
          <div className="space-y-6 text-center md:text-left text-white">
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src={logo}
                alt="Logo Thermocool"
                className="h-28 w-auto md:h-32 rounded-3xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">Nous contacter</h3>

            {/* Coordonnées : Utilisation d'icônes Lucide et de liens cliquables */}
            <div className="space-y-4">
              {/* Adresse */}
              <div className="flex items-start md:items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-lg">
                  <span className="font-semibold">Adresse :</span> Lot 26 B IV By-pass Ambohimangakely, Antananarivo 103, MADAGASCAR
                </p>
              </div>

              {/* Téléphone (Cliquable) */}
              <div className="flex items-start md:items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-lg">
                  <span className="font-semibold">Téléphone :</span> 
                  <a href="tel:+261346093103" className="hover:underline ml-2">+261 34 60 931 03</a> / 
                  <a href="tel:+261342131081" className="hover:underline ml-1">+261 34 21 310 81</a>
                </p>
              </div>

              {/* E-mail (Cliquable) */}
              <div className="flex items-start md:items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-lg">
                  <span className="font-semibold">E-mail :</span> 
                  <a
                    href="mailto:contact@thermocool-thechnology.com"
                    className="text-blue-300 hover:underline ml-2"
                  >
                    contact@thermocool-mg.com
                  </a>
                </p>
              </div>
            </div>

            {/* Antennes et message final */}
            <p className="text-lg pt-4">
               <span className="font-semibold">Nos Antennes :</span> Nosy-Be, Moramanga, Toamasina et Rwanda
            </p>
            <p className="mt-8 text-lg italic text-blue-100">
              Nous sommes disponibles pour répondre à vos demandes, projets et partenariats. Utilisez le formulaire pour nous envoyer un message rapidement !
            </p>
          </div>

          {/* Section Formulaire EmailJS (Droite) */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-2xl rounded-2xl p-8 space-y-6"
          >
            {/* Nom et prénom */}
            <div>
              <label className="block font-bold text-gray-800 mb-1">Nom et prénom(s) <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Votre nom et prénom(s)"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300"
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="block font-bold text-gray-800 mb-1">E-mail <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-bold text-gray-800 mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                rows="6"
                name="message"
                placeholder="Votre message..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide px-6 py-3 rounded-xl transition duration-300 w-full transform hover:scale-[1.01] shadow-lg"
            >
              <Mail className="inline-block w-5 h-5 mr-2 -mt-1" /> Envoyer le message
            </button>
          </form>
        </div>
      </div>

      {/* Container pour les toasts */}
      <ToastContainer />
    </section>
  );
}