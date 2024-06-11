import React from "react";
import PhotoSlider from "../components/PhotoSlider";
import { Element } from "react-scroll";
const Photos = () => {
  return (
    <Element as="section" name="archives" className="pt-11">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[32px] md:text-[58px] text-white font-kontes uppercase ">
          retour en <span className="text-yellow">Photos</span>
        </h2>
        <p className="text-white font-DMMono text-center my-2 text-[14px] md:text-[24px]">
          Revivez avec nous les moments forts de la première édition de cet{" "}
          <br className="hidden md:block" /> évènement incontournable.
        </p>
      </div>
      <PhotoSlider />
    </Element>
  );
};

export default Photos;
