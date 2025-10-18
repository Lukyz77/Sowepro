import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h1 className='text-[#FFE8CC] text-[38px] lg:text-[44px] font-teko font-bold mt-52 text-center px-10'>POJĎME SI ZVOLIT SOWEPRO</h1>
        <p className='text-[#FFE8CC] text-[20px] font-teko font-bold mt-24 text-center px-10'>BOOKNI SI KONZULTACI ZDARMA A PROBEREME TVŮJ PROJEKT</p>

        <div className=''>
            <form action="submit" className='
            flex flex-col space-y-16 mt-24 px-10 lg:px-0 
            justify-center items-center mx-auto 
            
            '>
                <input type="text" placeholder='JMÉNO' required 
                className='
                    bg-transparent shadow-[0px_5px_5px_2px_#5E8F8B] placeholder:text-[#FFE8CC] placeholder:font-teko 
                    placeholder:font-bold placeholder:text-center placeholder:text-[24px] lg:placeholder:text-[30px] px-6 py-4 rounded-2xl
                    text-white text-lg focus:outline-none focus:shadow-[0px_0px_5px_2px_#D1A45F] 
                    focus:placeholder:text-transparent transition-all duration-200 w-80
                    '/>

                <input type="text" placeholder='PŘÍJMENÍ' required 
                className='
                    bg-transparent shadow-[0px_5px_5px_2px_#5E8F8B] placeholder:text-[#FFE8CC] placeholder:font-teko 
                    placeholder:font-bold placeholder:text-center placeholder:text-[24px] lg:placeholder:text-[30px] px-6 py-4 rounded-2xl
                    text-white text-lg focus:outline-none focus:shadow-[0px_0px_5px_2px_#D1A45F] 
                    focus:placeholder:text-transparent transition-all duration-200 w-80
                    '/>

                <input type="email" placeholder='EMAIL' required 
                className='
                    bg-transparent shadow-[0px_5px_5px_2px_#5E8F8B] placeholder:text-[#FFE8CC] placeholder:font-teko 
                    placeholder:font-bold placeholder:text-center placeholder:text-[24px] lg:placeholder:text-[30px] px-6 py-4 rounded-2xl
                    text-white text-lg focus:outline-none focus:shadow-[0px_0px_5px_2px_#D1A45F] 
                    focus:placeholder:text-transparent transition-all duration-200 w-80
                    '/>

                <div className="flex justify-center items-center">
                    <button type='submit' className="relative overflow-hidden mt-16 font-teko px-4 py-6 text-xl rounded-3xl transition-all duration-500 ease-in-out group hover:shadow-[4px_4px_5px_2px_#D1A45F]">
                        <span className="relative z-10 transition-colors duration-500 ease-in-out text-[#0f1f33] group-hover:text-[#5E8F8B]">
                            VOLÍM SI SOWEPRO
                        </span>
                        <span className="absolute inset-0 rounded-3xl bg-[linear-gradient(90deg,#D1A45F_0%,#A28556_50%,#D1A45F_100%)] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                        <span className="absolute inset-0 rounded-3xl bg-[#142538] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Contact