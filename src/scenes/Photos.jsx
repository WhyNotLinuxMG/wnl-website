import React from "react";
import PhotoSlider from "../components/PhotoSlider";
const Photos = () => {
  return (
    <div id="archive" className="border pt-32">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[32px] md:text-[58px] text-white font-kontes uppercase ">
          retour en <span className="text-yellow">Photos</span>
        </h2>
        <p className="text-white font-DMMono text-center my-2 text-[14px] md:text-[24px] md:w-[] ">
          Revivez avec nous les moments forts de la première édition de cet{" "}
          <br className="hidden md:block" /> évènement incontournable.
        </p>
      </div>
      <PhotoSlider />
    </div>
  );
};

export default Photos;
