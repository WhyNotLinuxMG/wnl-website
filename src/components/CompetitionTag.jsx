const CompetitionTag = ({ content, event, line, about }) => {
  return (
    <div className=" pr-5 mr-8">
      <h4 className="text-white font-DMMono text-[18px] md:text-[28px]">
        {content}
      </h4>
      <div className="flex items-center ">
        <div className="w-[22px] h-[1px] bg-white mr-1"></div>
        <p className="font-DMMono text-bruning ">{event}</p>
      </div>
      <img className=" mt-5 mb-5 md:w-full" src={line} alt="" />
      <p className="text-white font-DMMono mb-2 text-[18px] md:text-20 md:w-[300px]">
        {about}
      </p>
      <div className="w-[30px] h-[3px] bg-raven mx-auto m-5 md:hidden"></div>
    </div>
  );
};

export default CompetitionTag;
