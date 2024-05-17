import React from 'react'
import Button from '../components/Button'
import ButtonFill from '../components/ButtonFill'
import Stands from '../components/Stands'
import { stand } from '../utils'
const Stande = () => {
  return (
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
  )
}

export default Stande