const GameStands = ({game,about}) => {
  return (
    <div>
        <h4 className='font-DMMono text-white capitalize mb-3 mt-5 font-semibold'>{game}</h4>
        <p className='font-DMMono text-white text-[15px] font-extralight md:w-[300px] '>{about}</p>
        <div className='md:w-96 w-48 h-[1px] mt-5 bg-raven'></div>
    </div>
  )
}

export default GameStands