import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
        <p className="text-gray-600 mb-8">Nous serons ravis d'échanger avec vous !</p>
        <ContactForm />
      </div>
    </section>
  );
}
