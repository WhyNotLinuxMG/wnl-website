import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Question({ item, index, isLast }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div key={index}>
      <div className={`${!isAnswerVisible ? 'question' : 'afficher_question' }  font-bold flex items-center justify-between border-b border-white pb-4 mb-4 ${isLast ? 'question_last' : ''}`} onClick={toggleAnswerVisibility}>
        {item.question}
        {isAnswerVisible ? <IoIosArrowUp className="text-2xl text-white" /> : <IoIosArrowDown className="text-2xl text-white" />}
      </div>
      <div className={`reponse text-white mb-4 ${isAnswerVisible ? 'afficher' : 'cacher'}`}>
        {item.reponses}
      </div>
    </div>
  );
}
