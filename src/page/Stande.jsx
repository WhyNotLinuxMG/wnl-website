import { Element } from "react-scroll";
import Button from "../components/Button";
import ButtonFill from "../components/ButtonFill";
import Stands from "../components/Stands";
import { stand } from "../utils";

const Stande = () => {
  return (
    <Element
      as="section"
      className="bg-background p-3 md:p-8 md:mx-8"
      name="stand"
    >
      <div className="max-w-[1700px] mx-auto pt-5">
        <ButtonFill content="Stand" />
        <h2 className="font-kontes text-white text-[28px] md:text-[48px]  pb-5 pl-2">
          Démarquez-vous avec un <span className="text-yellow">stand</span> à
          votre image.
        </h2>
        <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
          {stand.map((item) => (
            <Stands key={item.id} {...item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button content="Devenir sponsor" />
        </div>
      </div>
    </Element>
  );
};

export default Stande;
