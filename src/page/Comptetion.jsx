import React from 'react'
import ButtonFill from '../components/ButtonFill'
import Button from '../components/Button'
import CompetitionTag from '../components/CompetitionTag'
import { comptetionList } from '../utils'
const Comptetion = () => {
return (
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
)
}

export default Comptetion