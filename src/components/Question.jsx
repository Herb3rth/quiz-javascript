import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Option from './Option';

import './Question.css'


const Question = () => {
const [quizState, dispatch] = useContext(QuizContext);
const currentQuestion = quizState.questions[quizState.currentQuestion];

const onSelectOption = (option) => {
dispatch({
  type: "CHECK-ANSWER", 
  payload: {answer: currentQuestion.answer, option} //vou enviar esses dados que são a resposta do usuário para verificar se está correta
});
};

return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
       {currentQuestion.options.map((option)=>(
        <Option option={option} 
        key={option} 
        answer={currentQuestion.answer}
        selectOption={()=> onSelectOption(option)}/>
       ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={()=>dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
      )}
      </div>
  )
}

export default Question