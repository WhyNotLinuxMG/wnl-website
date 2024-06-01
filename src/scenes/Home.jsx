import Qr from "../assets/images/qr.png";
import Button from "../components/Button";
import ButtonFill from "../components/ButtonFill";
import GetTicketButton from "../components/GetTicketButton";
import Contributor from "../components/Contributor";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div className="top-section">
      <div className="mx-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col justify-between items-center md:items-stretch">
            <Nav />
            <div className="max-w-7xl mx-12">
              <div className="pt-28 flex flex-col md:items-end md:justify-between">
                {/* for mobile device  */}
                <div className="w-full md:w-1/2 md:hidden">
                  <div className="text-center md:text-left flex items-center justify-center flex-col md">
                    <ButtonFill content="22 juin 2024" />
                    <h2 className="font-kontes text-white text-[42px] md:text-[90px]">
                      Empowering <br className="md:hidden" /> Communities Through <br />{" "}
                      <span className="text-raven">Open Source.</span>
                    </h2>
                    <p className="font-DMMono text-white max-w-xl text-[14px] md:text-[20px] mt-4">
                      Explorez le pouvoir transformateur de Linux. Rejoignez-nous pour
                      découvrir son potentiel illimité lors de cet évènement incontournable.
                    </p>
                    <div className="mt-3 flex flex-col justify-center items-center  space-y-2 md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-3 mb-5">
                      <GetTicketButton />
                      <Button content="Devenir sponsor" />
                    </div>
                  </div>
                </div>

                {/* for large device */}
                <div className="w-full  hidden md:flex">
                  <div className="flex  justify-center flex-col ">
                    <ButtonFill content="22 juin 2024" />
                    <h2 className="font-kontes text-white text-[42px] md:text-[74px] max-w-2xl">
                      Empowering Communities  Through {" "}
                      <span className="text-raven">Open Source.</span>
                    </h2>
                    <p className="font-DMMono text-white max-w-3xl text-[14px] md:text-[20px] mt-4">
                      Explorez le pouvoir transformateur de Linux. Rejoignez-nous pour
                      découvrir son potentiel illimité lors de cet évènement incontournable.
                    </p>
                    <div className="mt-3 flex flex-col justify-center items-center  space-y-2 md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-3 mb-5">
                      <GetTicketButton />
                      <Button content="Devenir sponsor" />
                    </div>
                  </div>
                  <div className="hidden md:flex md:justify-end md:items-end md:w-1/2">
                    <img src={Qr} alt="QR code" />
                  </div>
                </div>
              </div>
            </div>
            <Contributor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
