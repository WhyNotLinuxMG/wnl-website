import { IoIosArrowDown } from 'react-icons/io';

export default function Question({ item, index }) {
  return (
    <div key={index}>
      <div className="question font-bold flex items-center justify-between border-b border-white pb-4 mb-4">
        {item.question}
        <IoIosArrowDown className="text-2xl text-white" />
      </div>
      <div className="reponse mb-4">{item.reponses}</div>
    </div>
  );
}
