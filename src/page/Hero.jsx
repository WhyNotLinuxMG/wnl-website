import QR from "../assets/images/qr_code.png";
import ButtonFill from "../components/ButtonFill";
import Button from "../components/Button";
import GetTicketButton from "../components/GetTicketButton";
import { useEffect, useState } from "react";

const Hero = ({ setIsPop, isPop }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Lancer l'animation après que le composant est monté
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // La durée de l'animation doit correspondre à celle définie en CSS (2s)

    // Nettoyage
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className="mt-4 max-w-[1600px] mx-auto px-4 py-8 items-center lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full hidden md:grid"
        id="hero"
      >
        <div className="contents">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <ButtonFill content="20 Juillet 2024" />
            <div className="backtitle">
              <h1 className="Kontes-Compressed-Bold text-[38px] md:text-[78px] text-white pl-3 md:pl-0">
                Empowering Communities
              </h1>
              <h1 className="Kontes-Compressed-Bold text-[38px] md:text-[78px] text-white pl-3 md:pl-0">
                Through <span className="color-raven">Open Source</span>
              </h1>
            </div>
            <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl font-DMMono ">
              Explorez le pouvoir transformateur de Linux. Rejoignez-nous pour
              découvrir son potentiel illimité lors de cet évènement
              incontournable.
            </p>
            <div className="mt-3 flex flex-col justify-center items-center  space-y-2 md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-3 mb-5">
              <GetTicketButton setIsPop={setIsPop} isPop={isPop} />
              <Button content="Devenir sponsor" />
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:inline-flex items-end justify-end ">
            <img
              src={QR}
              className={isAnimating ? "image-rotate" : ""}
              alt="qr"
              width={200}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-12 md:hidden">
        <div className="pt-28 flex flex-col md:items-end md:justify-between">
          {/* for mobile device  */}
          <div className="w-full md:w-1/2 md:hidden">
            <div className="text-center md:text-left flex items-center justify-center flex-col md">
              <ButtonFill content="2à Juillet 2024" />
              <h2 className="font-kontes text-white text-[42px] md:text-[90px]">
                Empowering <br className="md:hidden" /> Communities Through{" "}
                <br /> <span className="text-raven">Open Source.</span>
              </h2>
              <p className="font-DMMono text-white max-w-xl text-[14px] md:text-[20px] mt-4">
                Explorez le pouvoir transformateur de Linux. Rejoignez-nous pour
                découvrir son potentiel illimité lors de cet évènement
                incontournable.
              </p>
              <div className="mt-3 flex flex-col justify-center items-center  space-y-2 md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-3 mb-5">
                <GetTicketButton setIsPop={setIsPop} isPop={isPop} />
                <Button content="Devenir sponsor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
