import Linux from "../assets/images/linux.png";
import Shape from "../assets/images/shape.png";
import { statistique } from "../utils";
import StatsDetail from "./StatsDetail";

const Stats = () => {
  return (
    <div className="mt-8 relative flex flex-col md:flex-row items-center justify-center">
      <img src={Shape} className="hidden md:block w-full h-auto" alt="" />
      <div className="md:absolute inset-0 flex flex-col md:flex-row items-center justify-center">
        <img
          className="hidden md:block w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[416px] mb-4 md:mb-0"
          src={Linux}
          alt=""
        />
        <div className="grid grid-rows-2 grid-flow-col gap-4 ">
          {statistique.map((item) => (
            <StatsDetail key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
