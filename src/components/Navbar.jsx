import Logo from '../assets/Logo - single.png'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } 
        else {
            document.body.style.overflow = 'auto';
        }

        // Vyčistit po odpojení komponenty
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

  return (
        <div className="">
            <div className="relative mx-auto mt-7 flex items-center justify-between px-10 py-6">
                
                {/* Logo */}
                <div className="flex items-center lg:ml-5">
                    <img src={Logo} alt="Sowepro" className="w-20 h-30 lg:w-20 lg:h-20" />
                </div>

                <div className='md:hidden flex items-center'>
                    {menuOpen 
                        ? (<FiX className="text-5xl text-white md:hidden cursor-pointer z-[60]" onClick={ toggleMenu }/>)
                        : (<FiMenu className="text-5xl text-white md:hidden cursor-pointer z-[60]" onClick={ toggleMenu }/>)}
                </div>

                <div
                    className={`fixed top-0 right-0 h-full w-full bg-[linear-gradient(135deg,#D1A45F_0%,#A28556_50%,#D1A45F_100%)]
                                flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out
                                ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
                    >
                    <a href="#about" className="text-[#142538] text-4xl font-teko uppercase tracking-widest hover:opacity-70 transition-all" onClick={toggleMenu}>O nás</a>
                    <a href="#services" className="text-[#142538] text-4xl font-teko uppercase tracking-widest hover:opacity-70 transition-all" onClick={toggleMenu}>Služby</a>
                    <a href="#portfolio" className="text-[#142538] text-4xl font-teko uppercase tracking-widest hover:opacity-70 transition-all" onClick={toggleMenu}>Portfolio</a>
                    <a href="#contact" className="text-[#142538] text-4xl font-teko uppercase tracking-widest hover:opacity-70 transition-all" onClick={toggleMenu}>Kontakt</a>
                </div>

                {/* Navigace */}
                <nav className="hidden md:flex ml-20 items-center justify-center flex-1">
                    <div className="flex gap-5 px-5 py-4 rounded-2xl bg-[linear-gradient(90deg,#444542_0%,#A28556_50%,#D1A45F_100%)]">
                        <a href="#about" className="text-[#f9eed8] text-2xl font-teko tracking-wide uppercase hover:opacity-80 transition text-md">O nás</a>
                        <a href="#services" className="text-[#f9eed8] text-2xl font-teko tracking-wide uppercase hover:opacity-80 transition text-md">Služby</a>
                        <a href="#portfolio" className="text-[#f9eed8] text-2xl text-2xl font-teko tracking-wide uppercase hover:opacity-80 transition text-md">Portfolio</a>
                        <a href="#contact" className="text-[#f9eed8] text-2xl font-teko tracking-wide uppercase hover:opacity-80 transition text-md">Kontakt</a>
                    </div>
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                   <button className="relative overflow-hidden ml-6 font-teko px-4 py-5 rounded-3xl transition-all duration-500 ease-in-out group hover:shadow-[4px_4px_5px_2px_#D1A45F]">
                        <span className="relative z-10 transition-colors duration-500 ease-in-out text-[#0f1f33] text-xl group-hover:text-[#5E8F8B]">
                            VOLÍM SI SOWEPRO
                        </span>
                        <span className="absolute inset-0 rounded-3xl bg-[linear-gradient(90deg,#D1A45F_0%,#A28556_50%,#D1A45F_100%)] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                        <span className="absolute inset-0 rounded-2xl bg-[#142538] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </button>
                </div>
            </div>
        </div>

  )
}

export default Navbar