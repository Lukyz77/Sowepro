import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <h1 className='text-[#FFE8CC] text-[38px] lg:text-[44px] font-teko font-bold mt-52 text-center px-10'>NEVĚŘÍTE PŘESVĚDČETE SE</h1>

        <div>
            <div className='flex flex-col lg:flex-row lg:justify-around mt-24 justfiy-center'>
                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>VIDEO 1</p>
                </div>

                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>VIDEO 2</p>
                </div>

                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>VIDEO 3</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-around mt-24 justfiy-center'>
                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>WEB 1</p>
                </div>

                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>WEB 2</p>
                </div>

                <div className='rounded-xl shadow-[0px_4px_5px_2px_#D1A45F] mt-10 mx-20 px-10 py-24 lg:px-28 lg:mx-0 lg:py-28'>
                    <p className='text-[#FFE8CC] text-[22px] font-teko font-bold text-center'>WEB 3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio