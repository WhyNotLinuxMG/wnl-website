import Vector from "../assets/images/Vector.png";
import ButtonFill from "../components/ButtonFill";
import Stands from "../components/Stands";
import { stand } from "../utils";

function Stand() {
  return (
    <section>
      <div className="max-w-[1700px] mx-auto pt-5" id="stand">
        <ButtonFill content="Stand" />
        <h2 className="font-kontes  text-white  text-[34px] md:text-[48px] pt-5 pb-5  pl-2">
          Démarquez-vous avec un <span className="text-yellow">stand</span> a
          votre image.
        </h2>

        <div className="pt-9 ml-4 grid md:grid-cols-3  grid-cols-2">
          {stand.map((item) => (
            <Stands key={item.id} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div>
            <div className="flex w-[230px] border border-raven  rounded-md items-center justify-center p-2   ">
              <button className="text-white capitalize mr-6 font-DMMono">
                Devenir sponsor
              </button>
              <img className="object-contain" src={Vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stand;
