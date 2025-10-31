import React from 'react';
import { motion } from 'framer-motion';
import NextVision from '../assets/NextVision.png';
import JanNovak from '../assets/JanNovak.png';



const Portfolio = () => {
  const projects = [
    { title: 'Video 1', type: "video"},
    { title: 'Video 2', type: "video"},
    { title: 'Video 3', type: "video" },
    { title: 'NextVision', type: "web", image: NextVision, href: 'https://nextvision.vercel.app/' },
    { title: 'JanNovak', type: "web", image: JanNovak, href: 'https://jannovak.vercel.app/' },
    { title: 'Web 3', type: "web" },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[#142538] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-teko font-semibold mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nevěříte <span className="text-[#D1A45F]">Přesvědčete se</span>
        </motion.h2>
        <motion.p
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ukázky našich projektů – od firemních webů po moderní prezentační stránky.
          Postupně budeme přidávat další ukázky.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg border border-[#D1A45F]/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D1A45F]/0 via-[#D1A45F]/25 to-[#D1A45F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out flex items-center justify-center">
              <a
                href={project.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-teko px-10 py-3 bg-gradient-to-r from-[#D1A45F] to-[#b98a50] rounded-3xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#142538] drop-shadow-md hover:brightness-110"
              >
                { project.type == "web" ? "Celý web" : "Přehrát video" }
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          className="bg-[#D1A45F] text-[#142538] px-8 py-3 rounded-full font-medium hover:bg-[#b98a50] transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Zobrazit více projektů
        </motion.button>
      </div>
    </section>
  );
};

export default Portfolio;
