import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo - single.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Zablokování scrollování při otevřeném menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  // Přidání stínu při scrollování
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hlavní navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          hasShadow ? 'bg-[#0f1c2b]/60 shadow-2xl' : 'bg-transparent'
        }`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center lg:ml-5">
            <img
              src={Logo}
              alt="Sowepro"
              className="w-15 h-20"
            />
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-[#FFE8CC] text-lg font-medium">
            <li>
              <a href="#about" className="hover:text-[#D1A45F] transition-colors duration-300">
                O nás
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D1A45F] transition-colors duration-300">
                Služby
              </a>
            </li>
            <li>
              <a href="#whyus" className="hover:text-[#D1A45F] transition-colors duration-300">
                Proč my
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#D1A45F] transition-colors duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#D1A45F] transition-colors duration-300">
                Kontakt
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#FFE8CC] z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-[#0f1c2b]/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-10 text-[#FFE8CC] text-2xl font-medium">
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#about" onClick={() => setIsOpen(false)}>O nás</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#services" onClick={() => setIsOpen(false)}>Služby</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#whyus" onClick={() => setIsOpen(false)}>Proč my</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#contact" onClick={() => setIsOpen(false)}>Kontakt</a>
              </motion.li>
            </ul>

            {/* Zavírací tlačítko (vpravo nahoře) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[#D1A45F]"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
