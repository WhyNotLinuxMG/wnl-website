import Pingouin from '../assets/images/pin2.png';
import { questions_et_reponses } from '../utils/questions_et_reponses';
import Question from '../components/Question';

function Questions() {
  return (
    <div className="text-center my-4">
      <h2 className="font-kontes text-5xl md:text-[60px] lg:text-[70px] text-white pb-10 p-5 md:pl-0 text-lg">
  Foire aux <span className="text-yellow">questions</span>
</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m:grid-cols-1 ">
        <div className="flex justify-center p-4">
          <img src={Pingouin} alt="" />
        </div>
        <div className="p-4  text-left h-auto min-h-[200px] max-h-[800px] overflow-y-auto">
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
