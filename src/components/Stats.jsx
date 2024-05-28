import Linux from "../assets/images/linux.png"
import Shape from "../assets/images/shape.png"
import { statistique } from '../utils'
import StatsDetail from './StatsDetail'
const Stats = () => {
  return (
    <div className='mt-8 relative'>
    <img src={Shape} className='relative' alt="" />
    <div className='absolute inset-0 flex items-center'>
        <img className='w-[154px] md:w-[240px] lg:w-[416px] ml-4' src={Linux} alt="" />
        <div className='flex  items-center  ml-4'>
            {statistique.map((item)=>(
              <StatsDetail key={item.id} {...item}/>
            ))}
            
        </div>
    </div>
</div>


  )
}

export default Stats