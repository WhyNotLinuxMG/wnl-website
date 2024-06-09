import React from "react";
import Foire from "../assets/images/foire.png";
import Accordion from "../components/AccordionItem";
import { Element } from "react-scroll";
const Questions = () => {
  return (
    <Element className="mt-20 mb-9 mx-8 px-4 pt-32" name="faq">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[32px] md:text-[58px] text-white font-kontes uppercase ">
          Foire aux <span className="text-yellow">Questions</span>
        </h2>
      </div>
      <div className="flex items-start justify-between">
        <img className="hidden md:flex md:w-[450px]" src={Foire} alt="" />
        <div>
          <Accordion />
        </div>
      </div>
    </Element>
  );
};

export default Questions;
