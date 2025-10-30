import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0f1a28] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-teko font-semibold mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pojďme si zvolit <span className="text-[#D1A45F]">Sowepro</span>
        </motion.h2>
        <motion.p
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Bookni si konzultaci zdarma a probereme tvůj projekt
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* FORMULÁŘ */}
        <motion.form
          className="bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">Jméno</label>
            <input
              type="text"
              placeholder="Vaše jméno"
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1A45F]/50 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">E-mail</label>
            <input
              type="email"
              placeholder="Váš e-mail"
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1A45F]/50 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">Zpráva</label>
            <textarea
              placeholder="Vaše zpráva..."
              rows="5"
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1A45F]/50 transition-all resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="bg-[#D1A45F] text-[#142538] font-medium rounded-full py-3 mt-2 hover:bg-[#b98a50] transition-colors duration-300"
            whileTap={{ scale: 0.97 }}
          >
            Odeslat zprávu
          </motion.button>
        </motion.form>

        {/* KONTAKTNÍ INFO */}
        <motion.div
          className="flex flex-col justify-center bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 shadow-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-teko font-semibold mb-4 text-[#D1A45F]">
            Kontaktní údaje
          </h3>

          <div className="flex items-center gap-4">
            <Mail className="text-[#D1A45F]" />
            <div>
              <p className="text-[#FFE8CC]/60 text-sm">E-mail</p>
              <p className="text-[#FFE8CC] font-medium">info@sowepro.cz</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#D1A45F]" />
            <div>
              <p className="text-[#FFE8CC]/60 text-sm">Telefon</p>
              <p className="text-[#FFE8CC] font-medium">+420 777 123 456</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#D1A45F]" />
            <div>
              <p className="text-[#FFE8CC]/60 text-sm">Adresa</p>
              <p className="text-[#FFE8CC] font-medium">Praha, Česká republika</p>
            </div>
          </div>

          {/* <p className="text-[#FFE8CC]/70 text-sm mt-6 leading-relaxed">
            Jsme tu pro vás každý pracovní den.  
            Dejte nám vědět, jak vám můžeme pomoci – rádi se s vámi spojíme.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
