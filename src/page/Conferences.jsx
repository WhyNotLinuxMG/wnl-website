import React from 'react'
import LocalCol from '../assets/images/localColor.png'
import Local from '../assets/images/local.png'
import Conference from '../components/Conference'
import ButtonFill from '../components/ButtonFill'
const Conferences = () => {
    return (
    <section className='bg-background p-3 md:p-0'>
        <div className='max-w-[1700px] mx-auto pt-5'>
            <div className='flex flex-col items-center justify-center '>
            <h2 className='font-kontes uppercase text-white text-center text-[38px] md:text-[58px] '>type <br /> <span className='text-yellow'>d’activite</span></h2> 
            <div>
                <ButtonFill content="30 juin 2024"/>
            </div>
            </div>
            <div className='flex items-center justify-center text-center '>
            <div className='text-center pr-5 mr-8'>
                <h4 className='text-white font-DMMono text-[18px] md:text-[32px]'>Antananarivo</h4>
                <div className='flex items-center '>
                <img src={LocalCol} alt="" />
                <p className='font-DMMono text-bruning ms-4'>en presentiel</p>
                </div>
            </div>
            <div className='text-center pr-5'>
                <h4 className='text-white font-DMMono text-[18px] md:text-[32px]'>Fianarantsoa</h4>
                <div className='flex items-center '>
                <img src={Local} alt="" />
                <p className='font-DMMono text-white ms-4 '>en presentiel</p>
                </div>
            </div>
            </div>
            <Conference/>
        </div>
    </section>
  )
}

export default Conferences