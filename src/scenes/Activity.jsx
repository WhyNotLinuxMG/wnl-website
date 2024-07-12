import ButtonFill from "../components/ButtonFill"

function Activity() {
  return (
    <section >
      <div className='max-w-[1700px] mx-auto pt-5'>
        <div className='flex flex-col items-center justify-center '>
          <h2 className='font-kontes uppercase text-white text-center text-[38px] md:text-[58px] '>type <br /> <span className='text-yellow'>d’activité</span></h2> 
          <div>
            <ButtonFill content="20 Juillet 2024"/>
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
      </div>
    </section>
  )
}

export default Activity