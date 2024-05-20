import ButtonFill from "../components/ButtonFill"
import GetTicketButton from "../components/GetTicketButton"

function GetTicket() {
  return (
    <div className="flex flex-col items-center text-center px-14 py-56 sm:py-28">
      <ButtonFill content="22 Juin 2024"></ButtonFill>
      <h2 className="text-[38px] sm:text-[56px] md:text-[98px] text-white font-kontes">
        Ne ratez pas cet <span className="text-raven">évènement</span>
      <br />incontournable !
      </h2>
      <GetTicketButton/>
    </div>
  )
}

export default GetTicket