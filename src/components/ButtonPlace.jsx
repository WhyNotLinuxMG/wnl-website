import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Local from '../assets/images/local.png';
import LocalCol from '../assets/images/localColor.png';

const ButtonPlace = ({ place, campus, selectedConf, Selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sliceText, setSliceText] = useState(campus);

  // Effect to handle slice text based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Mobile devices
        setSliceText(campus.slice(0, 6));
      } else {
        setSliceText(campus);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, [campus]);

  return (
    <motion.button
      onClick={() => selectedConf(place)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isOpen ? "open" : "closed"}
      className={`text-center p-2 md:p-6 mr-3  border border-ebony rounded-lg cursor-pointer h-[100px] md:h-[128px] p  ${Selected === place ? "bg-ebony" : ""}`}
    >
      <h4 className='text-white font-DMMono text-[16px] md:text-[32px] font-bold'>{place}</h4>
      <div className='flex items-center'>
        <img src={Selected === place ? Local : LocalCol} alt="" />
        <p className={`font-DMMono capitalize ${Selected === place ? "text-white" : "text-bruning"} ms-4 mt-2`}>
          {sliceText}
        </p>
      </div>
    </motion.button>
  );
};

export default ButtonPlace;
