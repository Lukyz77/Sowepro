import React from 'react'

const Services = () => {
  return (
    <div id='services'>
        <h1 className='text-[#FFE8CC] text-[38px] lg:text-[44px] font-teko font-bold mt-32 text-center px-10'>SLUŽBY</h1>

        <div className='mt-24 flex flex-col lg:flex-row lg:justify-around justfiy-center items-center pt-16 space-y-10 lg:space-y-0'>
            
            <div className="group relative w-[280px] overflow-hidden rounded-xl 
                  bg-[linear-gradient(135deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                  transition-all duration-500 ease-in-out 
                  hover:shadow-2xl hover:-translate-y-2">

                    <div className="absolute inset-0 z-0 bg-[linear-gradient(225deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>

                <div className="relative px-12 py-24 z-10 font-teko font-bold text-center">
                    <h2 className="text-[#FFE8CC] text-2xl">TVORBA WEBU</h2>

                    {/* Skrytý text */}
                    <div className="max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 mt-4">
                        <p className="text-lg text-[#FFE8CC] font-normal mt-4">
                        Tvoříme moderní a rychlé weby, které přináší výsledky.
                        </p>
                        <button className="mt-10 bg-[#142538] text-[#FFE8CC] text-xl font-bold px-6 py-2 rounded-2xl transition hover:bg-[#D1A45F] hover:text-[#142538] transition duration-300">
                        CHCI WEB
                        </button>
                    </div>
                </div>
            </div>

            <div className="group relative w-[280px] overflow-hidden rounded-xl 
                  bg-[linear-gradient(135deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                  transition-all duration-500 ease-in-out 
                  hover:shadow-2xl hover:-translate-y-2">
                    <div className="absolute inset-0 z-0 bg-[linear-gradient(225deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>

                <div className="relative px-12 py-24 z-10 font-teko font-bold text-center">
                    
                    <h2 className="text-[#FFE8CC] text-2xl">VIDEO PRODUKCE</h2>

                    {/* Skrytý text */}
                    <div className="max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 mt-4">
                        <p className="text-lg text-[#FFE8CC] font-normal mt-4">
                        Tvoříme moderní a rychlé weby, které přináší výsledky.
                        </p>
                        <button className="mt-10 bg-[#142538] text-[#FFE8CC] text-xl font-bold px-6 py-2 rounded-2xl transition hover:bg-[#D1A45F] hover:text-[#142538] transition duration-300">
                        CHCI VIDEO
                        </button>
                    </div>
                </div>
            </div>

            <div className="group relative w-[280px] overflow-hidden rounded-xl 
                  bg-[linear-gradient(135deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                  transition-all duration-500 ease-in-out 
                  hover:shadow-2xl hover:-translate-y-2">
                    <div className="absolute inset-0 z-0 bg-[linear-gradient(225deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>

                <div className="relative px-12 py-24 z-10 font-teko font-bold text-center">
                    <h2 className="text-[#FFE8CC] text-2xl">FOTO PRODUKCE</h2>

                    {/* Skrytý text */}
                    <div className="max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 mt-4">
                        <p className="text-lg text-[#FFE8CC] font-normal mt-4">
                        Tvoříme moderní a rychlé weby, které přináší výsledky.
                        </p>
                        <button className="mt-10 bg-[#142538] text-[#FFE8CC] text-xl font-bold px-6 py-2 rounded-2xl transition hover:bg-[#D1A45F] hover:text-[#142538] transition duration-300">
                        CHCI FOTO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services