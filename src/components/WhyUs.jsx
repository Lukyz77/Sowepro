import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <h1 className='text-[#FFE8CC] text-[38px] lg:text-[44px] font-teko font-bold mt-52 text-center px-10'>PROČ SI VYBRAT NÁS</h1>

        <div>
            <div className='flex flex-col lg:flex-row lg:justify-around mt-24 justfiy-center items-center'>
                <div className='relative shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-4 mx-10 overflow-hidden group'>

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

                    <p className='relative z-10 text-[#FFE8CC] text-[18px] lg:text-[24px] leading-[3] font-teko text-left p-6'>NÁŠ CÍL JE VÝSLEDEK, NETOČÍME TRENDY, TOČÍME PODLE TOHO, CO JE CÍLEM KLIENTA</p>
                </div>

                <div className='relative shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-2 mx-10 overflow-hidden group'>

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

                    <p className='relative z-10 text-[#FFE8CC] text-[18px] lg:text-[24px] leading-[3] font-teko text-left p-6'>NEJSEM DALŠÍ PUBERTÁLNÍ SMMA AGENTURA, KTERÁ CHCE POSUNOUT TVOJE PODNIKÁNÍ</p>
                </div>

                <div className='relative shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-4 mx-10 overflow-hidden group'>

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#142538_0%,#444542_25%,#73654C_50%,#A28556_75%,#D1A45F_100%)]
                        opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

                    <p className='relative z-10 text-[#FFE8CC] text-[18px] lg:text-[24px] leading-[3] font-teko text-left p-6'>PRACUJEME S MODERNÍMI TECHNOLOGIEMI PRO MAXIMÁLNÍ KVALITU NAŠICH SLUŽEB</p>
                </div>
            </div>

            {/* TEXT REFERENCE */}
             <div className='flex flex-col lg:flex-row lg:justify-around mt-24 justfiy-center items-center'>
                <div className='shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-4 mx-10 overflow-hidden group'>

                    <p className='text-[#FFE8CC] text-[20px] lg:text-[24px] leading-[4] font-teko text-center px-20 lg:px-28 py-12'>
                        TEXT REFERENCE 1
                        </p>
                </div>

                <div className='shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-2 mx-10 overflow-hidden group'>

                    <p className=' text-[#FFE8CC] text-[20px] lg:text-[24px] leading-[4] font-teko text-center px-20 lg:px-28 py-12'>
                        TEXT REFERENCE 2
                        </p>
                </div>

                <div className='shadow-[0px_4px_5px_2px_#D1A45F] rounded-xl mt-10 lg:space-y-0 px-4 mx-10 overflow-hidden group'>

                    <p className='text-[#FFE8CC] text-[20px] lg:text-[24px] leading-[4] font-teko text-center px-20 lg:px-28 py-12'>
                        TEXT REFERENCE 3
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs