import React from 'react'
import ButtonFill from './components/ButtonFill'
import Conference from './components/Conference'
import Stands from './components/Stands'
import Button from './components/Button'
import { stand,comptetionList } from './utils'
import Stats from './components/Stats'
import CompetitionTag from './components/CompetitionTag'
import LocalCol from './assets/images/localColor.png'
import Local from './assets/images/local.png'
const App = () => {
  return (
    <>
    
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

      <section className='bg-background p-3 md:p-0'>
          <div  className='max-w-[1700px] mx-auto pt-5'>
            <ButtonFill content="stand"/>
            <h2 className='font-kontes  text-white  text-[34px] md:text-[48px] pt-5 pb-5  pl-2'>Demarquez vous avec un <span className='text-yellow'>stand</span> a votre image.</h2> 
            <div className='pt-9 ml-4 grid md:grid-cols-3  grid-cols-2'>
              {stand.map((item)=>(
                <Stands key={item.id} {...item}/>
              ))}
            </div>
            <div className='flex items-center justify-center'>
              <Button content="devenir sponsor"/>
            </div>
          </div>
      </section>

      <section className='bg-background p-3 md:p-0' >
        <div className='max-w-[1700px] mx-auto pt-9'>
            <ButtonFill content="statistique"/>
            <h2 className='font-kontes capitalize text-yellow  text-[38px] md:text-[48px] '>Les chiffres cles <span className='text-white'>de l’edition precedente.</span></h2>   
            <Stats/>
        </div>
      </section>
      <section className='bg-background p-3 md:p-0'> 
        <div className='max-w-[1700px] mx-auto pt-5'>
            <ButtonFill content="competion"/>
            <div className='md:flex md:justify-between mb-5  '>
              <h2 className='font-kontes  text-white text text-[38px] md:text-[58px] '>DIfferents challenges a relever pour <span className='text-raven'>rendre cet evenement fun</span></h2> 
              <p className='text-white font-DMMono text-[14px] md:text-[20px] md:w-[30%]'>Les consignes seront publiés sur la page. Suivez-nous régulièrement pour ne rien rater.</p>
            </div>

            <div className='md:flex md:justify-between'>
              {comptetionList.map((item)=>(
                <CompetitionTag key={item.id} {...item}/>
              ))}
            </div>
            <div className='flex items-center justify-center mt-9 pb-5'>
              <Button content="Participer au compétition"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default App