import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";


import air from "../assets/armoire2.jpg";
import clim from "../assets/clim.jpg";
import adduction from "../assets/clim1.jpg";
import cuisine from "../assets/cuisine.jpg";
import desenfumage from "../assets/desenfumage.jpg";
import vmc from "../assets/vmc.png";

export default function Accueil() {
  const images = [

    { src: air, alt: "Traitement de l’air" },
    { src: clim, alt: "Climatisation" },
    { src: adduction, alt: "clim" },
    { src: cuisine, alt: "Cuisine professionnelle" },
    { src: desenfumage, alt: "Désenfumage" },
    { src: vmc, alt: "VMC" },
  ];

  return (
    <section id="accueil" className="relative h-[80vh] w-full overflow-hidden">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
    className="h-full"
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <div className="h-[80vh] w-full relative">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Bienvenue chez THERMOCOOL TECHNOLOGY
            </h2>
            <p className="text-lg max-w-2xl drop-shadow-md">
              Nous accompagnons nos clients avec des solutions innovantes et efficaces pour leur croissance.
            </p>
            <a
              href="#contact"
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>


</section>

  );
}
