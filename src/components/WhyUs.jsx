import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Goal, Users, Sparkles } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Goal size={36} />,
      title: 'Cíl a klient',
      text: 'Náš cíl je výsledek, netočíme trendy, točíme video podle toho, co je cílem klienta',
    },
    {
      icon: <Users size={36} />,
      title: 'Individuální přístup',
      text: 'Ke každému klientovi přistupujeme osobně. Nasloucháme vašim potřebám a společně hledáme ideální řešení.',
    },
    {
      icon: <Sparkles size={36} />,
      title: 'Moderní technologie',
      text: 'Pracujeme s moderními techonlogiemi pro maximální kvalitu našich služeb.',
    },
  ];


  return (
    <section
      id="whyus"
      className="relative bg-[#0f1a28] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-teko font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proč <span className="text-[#D1A45F]">Sowepro</span>?
        </motion.h2>
        <motion.p
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Naše práce stojí na zkušenostech, inovacích a spolehlivém přístupu.
          Vaše spokojenost je pro nás prioritou.
        </motion.p>
      </div>

      {/* Tři výhody */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 text-left hover:shadow-[#D1A45F]/10 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-[#D1A45F] mb-5">{item.icon}</div>
            <h3 className="text-2xl font-teko font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-[#FFE8CC]/70 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default WhyUs;
