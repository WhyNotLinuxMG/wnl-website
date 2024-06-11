import { Element } from "react-scroll";
import Button from "../components/Button";
import ButtonFill from "../components/ButtonFill";
import CompetitionTag from "../components/CompetitionTag";
import { comptetionList } from "../utils";
const Comptetion = () => {
  return (
    <Element
      as="section"
      name="competition"
      className="bg-background p-3 md:p-0 "
    >
      <div className="max-w-[1700px] px-2 md:mx-4 md:px-12">
        <ButtonFill content="compétition" />
        <div className="md:flex md:justify-between mb-5  ">
          <h2 className="font-kontes md:w-3/4 text-white text-[28px] md:text-[58px] ">
            Différents challenges à relever pour participer{" "}
            <span className="text-raven">aux compétitions</span>
          </h2>
          <p className="text-white font-DMMono text-[14px] md:text-[20px] md:w-[30%]">
            Les consignes seront publiés sur la page. Suivez-nous régulièrement
            pour ne rien rater.
          </p>
        </div>

        <div className="md:flex md:justify-between">
          {comptetionList.map((item) => (
            <CompetitionTag key={item.id} {...item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-9 pb-5">
          <Button content="Participer au compétition" />
        </div>
      </div>
    </Element>
  );
};

export default Comptetion;
