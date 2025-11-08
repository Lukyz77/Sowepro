import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence, scale } from 'framer-motion';
import Logo from '../assets/Logo - single.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
    setIsOpen(false);
  };

  

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
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center lg:ml-5">
            <motion.img
              whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
              whileTap={{ scale: 0.95 }}
              src={Logo}
              alt="Sowepro"
              className="w-15 h-20 cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex lg:ml-20 items-center gap-8 text-[#FFE8CC] text-md lg:text-lg font-medium">
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

          <div className="relative w-[170px] flex justify-end items-center">
            <motion.a
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ width: 170 }}
              whileHover={{
                width: 250,
                boxShadow: "0 0 25px rgba(217,174,102,0.6)",
                transition: { type: "ease", duration: 0.2 },
              }}
              className="
                hidden lg:absolute right-0 md:flex items-center justify-center bg-[#B8955F]
                text-[#0f1c2b] text-sm font-semibold py-4 rounded-2xl
                overflow-hidden transition-all duration-300
              "
              href='#contact'
            >
              {/* Raketka */}
              <motion.span
                animate={
                  isHovered
                    ? {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        transition: {
                          delay: 0.4,
                          type: "spring",
                          stiffness: 400,
                          damping: 12,
                        },
                      }
                    : { x: -35, y: 25, opacity: 0 }
                }
                className="absolute left-6"
              >
                <Rocket size={25} />
              </motion.span>

              {/* Text */}
              <motion.span
                animate={
                  isHovered
                    ? { x: 8, transition: { type: "tween", duration: 0.25 } }
                    : { x: 0 }
                }
                className="tracking-wide"
              >
                VOLÍM SI SOWEPRO
              </motion.span>
            </motion.a>
          </div>


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
            <ul className="flex flex-col items-center gap-10 mt-10 text-[#FFE8CC] text-3xl font-medium">
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

            <a
              className="
                flex items-center justify-center mt-16  bg-[#B8955F]
                text-[#0f1c2b] text-xl font-semibold py-5 px-8 rounded-2xl
                overflow-hidden
              "
              href='#contact'
              onClick={() => setIsOpen(false)}
            > Volím si Sowepro</a>

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
