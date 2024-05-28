import CountUp from 'react-countup';
const StatsDetail = ({number,text}) => {
  return (
    <div className='text-white text-center'>
        <h3 className='font-kontes text-[30px] md:text-[60px] font-'><CountUp end={number} duration={4} /><span className='font-sans'>+</span></h3>
        <p className='md:w-[200px] '>{text}</p>
    </div>
  )
}

export default StatsDetail