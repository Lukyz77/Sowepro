import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Camera } from 'lucide-react'; // můžeš upravit ikony podle obsahu

const Services = () => {
  const services = [
    {
      icon: <Code size={36} />,
      title: 'Webové stránky na míru',
      text: 'Tvoříme moderní, rychlé a bezpečné webové stránky, které odpovídají potřebám vašeho podnikání. Každý projekt stavíme s důrazem na kvalitu a funkčnost.',
      buttonText: "Chci Web"
    },
    {
      icon: <Video size={36} />,
      title: 'Video Produkce',
      text: 'Vzhled webu je klíčový. Připravíme pro vás design, který nejen skvěle vypadá, ale zároveň zajišťuje přehlednou a intuitivní uživatelskou zkušenost.',
      buttonText: "Chci Video"
    },
    {
      icon: <Camera size={36} />,
      title: 'Foto Produkce',
      text: 'Zrychlíme načítání, vylepšíme SEO a zajistíme, že váš web bude fungovat bezchybně na všech zařízeních. Efektivita a stabilita jsou pro nás samozřejmostí.',
      buttonText: "Chci Foto"
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#142538] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-teko font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Naše <span className="text-[#D1A45F]">služby</span>
        </motion.h2>
        <motion.p
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Zaměřujeme se na tvorbu kvalitních webových řešení, která zanechají
          silný dojem a pomohou vaší značce růst online.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0f1a28] border border-[#D1A45F]/20 rounded-2xl p-8 text-left shadow-lg hover:shadow-[#D1A45F]/10 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-[#D1A45F] mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 font-teko">
                {service.title}
                </h3>
                <p className="text-[#FFE8CC]/70 leading-relaxed">{service.text}</p>
                <div>
                    <button className='flex flex-end mt-10 bg-[#D1A45F] text-[#142538] text-md font-bold px-6 py-2 rounded-2xl transition hover:bg-[#E3C8A8] hover:text-[#142538] transition duration-300'>
                        {service.buttonText}
                    </button>
                </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
