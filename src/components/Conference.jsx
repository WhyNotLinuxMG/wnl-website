import React from 'react'
import ButtonFill from './ButtonFill'
import { conferenceImage } from '../utils'
import ListConference from './ListConference'

const Conference = () => {
  return (
    <div className='pt-6 mt-6 '>
        <ButtonFill content="Conference"/>
        <h2 className='font-kontes text-[38px] md:text-[58px] text-white pb-[5rem] pl-3 md:pl-0'>Huit <span className='text-yellow' >conférences</span> passionnantes.</h2>
        <div className='flex items-center  flex-wrap justify-center relative'>
              {conferenceImage.map((item)=>(
                <ListConference key={item.id} {...item}/>
              ))}
        </div>
    </div>
  )
}

export default Conference