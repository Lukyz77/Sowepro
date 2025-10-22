import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: 'Video 1', },
    { title: 'Video 2', },
    { title: 'Video 3', },
    { title: 'Web 1', },
    { title: 'Web 2', },
    { title: 'Web ', },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[#142538] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-teko font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Naše <span className="text-[#D1A45F]">Portfolio</span>
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
            <div className="absolute inset-0 bg-[#D1A45F]/10 group-hover:bg-[#D1A45F]/40 transition-all duration-500 flex items-center justify-center">
              <h3 className="text-2xl font-teko font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white drop-shadow-md">
                {project.title}
              </h3>
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
