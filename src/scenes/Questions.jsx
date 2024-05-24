import Pingouin from '../assets/images/pin.png';
import { questions_et_reponses } from '../utils/questions_et_reponses';
import Question from '../components/Question';

function Questions() {
  return (
    <div className="text-center my-4">
      <h2 className="font-kontes text-[38px] md:text-[70px] text-white pb-[5rem] p-5 md:pl-0 text-lg">
        Foire aux <span className="text-yellow">questions</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center p-4 md:col-span-1">
          <img src={Pingouin} alt="" />
        </div>
        <div className="p-4 md:col-span-2 text-left">
          {questions_et_reponses.map((item, index) => (
            <Question 
              item={item} 
              index={index} 
              isLast={index === questions_et_reponses.length - 1} 
              key={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
