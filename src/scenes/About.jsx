import React from 'react'
import About1 from '../assets/images/about1.jpeg'
import About2 from '../assets/images/about2.jpeg'
import ButtonFill from '../components/ButtonFill'

function About() {
    return (
        <div className='w-full'>
            <div className='w-full h-[90vh] relative'>
                <img src={About1} alt="" className='w-full h-full object-cover absolute ' />
                <div className='w-full h-full bg-[#020f13c9] absolute flex justify-center items-center'>
                    <div className='w-[75%] m-auto '>
                        <div className='w-full flex justify-center'><ButtonFill content="A propos" /></div>
                        <div className=' font-DMMono md:text-[43px] text-2xl leading-[60px] text-center font-semibold text-slate-200'>Cette édition est une tribune dédiée à l'utilisation quotidienne de Linux et à son impact dans tous les domaines.</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[90vh] relative'>
                <img src={About2} alt="" className='w-full h-full object-cover absolute ' />
                <div className='w-full h-full bg-[#020f13c9] absolute flex justify-center items-center'>
                    <div className='w-[75%] m-auto'>
                        <div className=' font-DMMono md:text-[43px] text-2xl leading-[60px] text-center font-semibold text-slate-200'>Notre événement constituera un véritable carrefour d'échange d'expériences, de formation et de collaboration. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
