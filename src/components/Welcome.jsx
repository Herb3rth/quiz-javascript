import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
//import React from 'react'

import "./Welcome.css"
import Quiz from '../img/quiz.svg'



const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div id='welcome'>
    <h2>Bem-vindos!</h2>
    <p>Click no botão abaixo para começar</p>
    <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    <img src={Quiz} alt="início do quiz" />
    
    </div>
  )
}

export default Welcome

/* Preciso desestruturar o array que chega com os 2 elementos (quizReducer, initialStage) e vou chamar 
o dispatch que é como eu vou entrar no meu reducer e execultar o switch.
Com o quizState eu pego os valores, e com o dispatch eu altero eles;
No button eu tenho uma função anônima que dá um dispatch lá no meu reducer, mas para saber o que eu vou afetar
lá dentro, preciso passar um parâmetro que é um objeto com uma chave de type e o valor da chave que eu
quero entrar no meu switch  */