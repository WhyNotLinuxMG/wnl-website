import ButtonFill from '../components/ButtonFill'
import Stats from '../components/Stats'
const Statistiques = () => {
  return (
    <section className='bg-background p-3 md:p-0 mx-4 md:mx-8' >
        <div className='max-w-[1700px] mx-auto pt-9'>
            <ButtonFill content="statistique"/>
            <h2 className='font-kontes capitalize text-yellow  text-[38px] md:text-[48px] '>Les chiffres cles <span className='text-white'>de l’edition precedente.</span></h2>   
            <Stats/>
        </div>
    </section>
  )
}

export default Statistiques