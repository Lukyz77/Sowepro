import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center '>
        <div className='block'>
            <div className='block'>
                <h1 className='text-[#FFE8CC] text-[42px] lg:text-[60px] font-teko font-bold mt-32 text-center px-10'>ZVOL SI SOWEPRO A VYSTUP Z DAVU</h1>
                <p className='text-[#FFE8CC] text-[18px] lg:text-[20px] font-teko mt-40 text-center px-10'>Váše značka je hlavní hvězda a my mu dodáme příběh.</p>
                <p className='text-[#FFE8CC] text-[18px] lg:text-[px] font-teko mt-10 lg:mt-0 text-center px-10'>Tvoříme videa, weby a fotky, které pomůžou Vaší firmě vystoupit z davu konkurence.</p>
            </div>

            <div className="flex justify-center items-center">
                <button className="relative overflow-hidden mt-32 font-teko px-4 py-6 text-xl rounded-3xl transition-all duration-500 ease-in-out group hover:shadow-[4px_4px_5px_2px_#D1A45F]">
                    <span className="relative z-10 transition-colors duration-500 ease-in-out text-[#0f1f33] group-hover:text-[#5E8F8B]">
                        VOLÍM SI SOWEPRO
                    </span>
                    <span className="absolute inset-0 rounded-3xl bg-[linear-gradient(90deg,#D1A45F_0%,#A28556_50%,#D1A45F_100%)] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                    <span className="absolute inset-0 rounded-3xl bg-[#142538] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero