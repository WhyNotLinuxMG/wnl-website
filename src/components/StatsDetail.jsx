import CountUp from 'react-countup';

const StatsDetail = ({ number, text }) => {
  return (
    <div className='text-white text-center'>
      <h3 className='font-kontes text-[30px] md:text-[40px] lg:text-[50px]'>
        <CountUp end={number} duration={4} /><span className='font-sans'>+</span>
      </h3>
      <p className='w-full text-[16px]  lg:text-[20px]'>
        {text}
      </p>
    </div>
  );
}

export default StatsDetail;
