import React from 'react'
import Together from '../assets/together.png'

const About = () => {
  return (
    <div id='about' className='block'>
        <h1 className='text-[#FFE8CC] text-[38px] lg:text-[44px] font-teko font-bold mt-32 text-center px-10'>O NÁS</h1>

        <div className='block lg:flex lg:justify-around justfiy-center items-center pt-16'>
            <div className='flex flex-col mt-10 space-y-8 px-28 text-left'>
                <p className='text-[#FFE8CC] text-[16px] font-teko italic lg:text-[22px]'>Jsme mladý tým, který spojuje kreativitu s nejmodernější technologií.</p>
                <p className='text-[#FFE8CC] text-[16px] font-teko italic lg:text-[22px]'>Nejedeme podle prázdných trendů – každé naše video, fotka i web mají jasný cíl.</p>
                <p className='text-[#FFE8CC] text-[16px] font-teko italic lg:text-[22px]'>Z tvých sítí a webu uděláme profesionální vizitku, která zaujme a prodá.</p>
            </div>

            <div className=' pt-12'>
                <img src={Together} alt="sowepro team" className='px-20 py-20 lg:pr-10 lg:h-96 lg:px-0 lg:py-0'/>
            </div>
        </div>
    </div>
  )
}

export default About