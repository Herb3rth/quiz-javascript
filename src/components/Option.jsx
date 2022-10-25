import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"

function Option({option, selectOption, answer}) {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div className={`option 
    ${quizState.answerSelected && option === answer? 'currect' : ''} 
   ${quizState.answerSelected && option !== answer? 'wrong' : ''}`} 
    
    onClick={()=> selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option