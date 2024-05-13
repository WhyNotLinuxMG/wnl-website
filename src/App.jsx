
import Home from './pages/Home'

import './styles/App.css'

import React from 'react'
import ButtonFill from './components/ButtonFill'
import Conference from './components/Conference'
import Stands from './components/Stands'
import { stand } from './utils'
import Vector from './assets/images/Vector.png'
const App = () => {
  return (
    <section className='container'>
      <Home/>
      <section className='bg-background'>
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
              <div className='w-[22px] h-[1px] bg-white mr-1'></div>
              <p className='font-DMMono text-bruning'>en presentiel</p>
            </div>
          </div>
          <div className='text-center pr-5'>
            <h4 className='text-white font-DMMono text-[18px] md:text-[32px]'>Fianarantsoa</h4>
            <div className='flex items-center '>
              <div className='w-[22px] h-[1px] bg-white mr-1'></div>
              <p className='font-DMMono text-bruning '>en presentiel</p>
            </div>
          </div>
        </div>
        <Conference/>
      </div>
      </section>

      <section className='bg-background'>
          <div  className='max-w-[1700px] mx-auto pt-5'>
            <ButtonFill content="stand"/>
            <h2 className='font-kontes  text-white  text-[34px] md:text-[48px] pt-5 pb-5  pl-2'>Demarquez vous avec un <span className='text-yellow'>stand</span> a votre image.</h2> 

            <div className='pt-9 ml-4 grid md:grid-cols-3  grid-cols-2'>
              {stand.map((item)=>(
                <Stands key={item.id} {...item}/>
              ))}
            </div>

            <div className='flex items-center justify-center'>
              <div>
                <div className='flex w-[230px] border border-raven  rounded-md items-center justify-center p-2   '>
                    <button className='text-white capitalize mr-6 font-DMMono'>devenir sponsor</button>
                    <img className='object-contain' src={Vector} alt="" />
                </div>
              </div>
            </div>
          </div>
      </section>
    </section>
  )
}

export default App