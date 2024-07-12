import { useEffect, useState } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const CountDownDay = ({ WNL }) => {
  const [days, setDays] = useState(0);
  const totalDays = 100;

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date().getTime();
      const distance = WNL - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(days);
      } else {
        setDays(0);
      }
    };

    calculateDays();
    const timeId = setInterval(calculateDays, 86400000);

    return () => clearInterval(timeId);
  }, [WNL]);

  return (
    <div
      className="pt-5 flex items-center justify-center flex-col "
      id="section 1"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-[90px] md:text-[218px] font-kontes text-ebony pt-[3rem]">
          WNL 2.0
        </h2>
        <div className="">
          <h2 className="text-[100px] md:text-[150px] font-DMMono text-white ">
            <span className="font-Abraham text-yellow">j </span>
            <span className="font-Abraham text-center text-white">-</span>
            {days}
          </h2>
        </div>
        <div className="w-75 mb-5 h-5">
          <ProgressBar
            className="progress-bar-white"
            now={days}
            max={totalDays}
            label={<span className="bg-white">{`${days} jours`}</span>}
          />
        </div>
        <h2 className="text-[90px] md:text-[218px] font-kontes text-ebony pt-[3rem] text-nowrap">
          20 Juillet 2024
        </h2>
      </div>
    </div>
  );
};

export default CountDownDay;
