import Binary from "../assets/images/binary.png";
import ButtonFill from "../components/ButtonFill";
import GetTicketButton from "../components/GetTicketButton";
function GetTicket({ setIsPop, isPop }) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 h-screen text-center px-14 py-0 md:py-20  gradientBg relative">
      <ButtonFill content="22 Juin 2024"></ButtonFill>
      <h2 className="text-[38px] sm:text-[56px] md:text-[98px] text-white font-kontes">
        Ne ratez pas cet <span className="text-raven">évènement</span>
        <br />
        incontournable !
      </h2>
      <GetTicketButton setIsPop={setIsPop} isPop={isPop} />
      <div className=" absolute left-0 bottom-0">
        <img src={Binary} className="h-[70px]" alt="" />
        <img src={Binary} className="h-[70px] md:hidden " alt="" />
      </div>
    </div>
  );
}

export default GetTicket;
