import { Element } from "react-scroll";
import ButtonFill from "../components/ButtonFill";
import Stats from "../components/Stats";
const Statistiques = () => {
  return (
    <Element
      as="section"
      className="bg-background p-3 md:p-0 mx-4 md:mx-8"
      name="statistique"
    >
      <div className="max-w-[1700px] mx-auto pt-9">
        <ButtonFill content="Statistiques" />
        <h2 className="font-kontes capitalize text-yellow  text-[38px] md:text-[48px] ">
          Les chiffres clés{" "}
          <span className="text-white">de l’édition précédente.</span>
        </h2>
        <Stats />
      </div>
    </Element>
  );
};

export default Statistiques;
