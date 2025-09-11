import { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo_thermocool.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section id="contact" className="bg-gradient-to-r from-blue-900 to-blue-500 py-20 bg-blue-900 rounded-2xl">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-6 text-center md:text-left text-white">
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src={logo}
                alt="Logo Thermocool"
                className="h-28 w-auto md:h-32 rounded-3xl"
              />
            </div>

            <h3 className="text-xl font-semibold text-white">Nos coordonnées</h3>
            <p>📍 Adresse : Lot 26 B IV By-pass Ambohimangakely, Antananarivo 102, MADAGASCAR</p>
            <p>📞 Téléphone : 034 60 931 03 / 034 21 310 81</p>
            <p>
              ✉️ E-mail :{" "}
              <a
                href="mailto:thermocool@thermocool-mg.com"
                className="text-blue-300 hover:underline"
              >
                thermocool@thermocool-mg.com
              </a>
            </p>
              <p> Nos Antennes: Nosy-Be, Moramanga, Toamasina</p>
            <p className="mt-6">
              Nous sommes disponibles pour répondre à vos demandes, projets et partenariats.
              Envoyez-nous un message via le formulaire ci-contre !
            </p>
          </div>

          {/* Formulaire EmailJS */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-xl rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="block font-medium text-gray-700">Nom et prénom(s)</label>
              <input
                type="text"
                name="name"
                placeholder="Votre nom et prénom(s)"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Votre message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md transition w-full"
            >
              ✉️ Envoyer le message
            </button>
          </form>
        </div>
      </div>

      {/* Container pour les toasts */}
      <ToastContainer />
    </section>
  );
}
