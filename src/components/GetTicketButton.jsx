import ArrowLeft from '../assets/images/left-arrow.png'

function GetTicketButton() {
  return (
    <button className="px-8 py-4 bg-white self-stretch sm:self-center font-[DMMono] rounded-md">
      <span className="text-[15px] md:text-xl">Obtenir un billet</span>
      <img className='inline ms-4' src={ArrowLeft} alt='flêche droite'/>
    </button>
  )
}

export default GetTicketButton