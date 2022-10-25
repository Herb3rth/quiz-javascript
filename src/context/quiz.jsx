import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]; //assim determino os estágios do jogo

const initialStage = {
    gameStage: STAGES[0], //estado atual do início do jogo
    questions, // não preciso determinar o valor pq ele vai puxar direto de data/questions
    currentQuestion: 0,
    score: 0,
    answerSelected: false,

};

const quizReducer = (state, action)=>{ 
    
    switch(action.type){
      case "CHANGE_STATE":
        return {
            ...state, //Para manter o estado anterior 
            gameStage: STAGES[1],
        };

        case "REORDER_QUESTIONS":
           const reorderedQuestions = questions.sort(()=>{
            return Math.random() - 0.5;
           })
            return {...state,
            questions: reorderedQuestions};

            case "CHANGE_QUESTION":
             const nextQuestion = state.currentQuestion + 1
             let endGame = false

             if(!questions[nextQuestion]){
                endGame = true;
             }
             return {
               ...state,
               currentQuestion: nextQuestion,
               gameStage: endGame ? STAGES[2] : state.gameStage,
               answerSelected: false
             };

             case "NEW_GAME":
                return initialStage;

               case "CHECK-ANSWER":
                if(state.answerSelected) return state
              const answer = action.payload.answer
              const option = action.payload.option
              let currectAnswer = 0

              if(answer === option) currectAnswer = 1

              return {
                ...state,
                score: state.score + currectAnswer, //conta mais 1 ponto
                answerSelected: option, //exibir botão
              }

        default:
            return state;
    }
};

//------------------------------------------------------------------

export const QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const value = useReducer(quizReducer, initialStage) 
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};

/*Preciso ter a possibilidade de alterar o estado do jogo e vou fazer isso usando o quizReducer;
Ele execulta uma função baseada em dois parâmetros: o initialstage nesse caso (depois ele vai ser modificado)
e também a action (que seria a ação que o usuário faz), ou seja, eu tenho o estado inical do jogo e depois uma
ação que vai modificar o estado do jogo.

Os estados serão mudados baseado em um switch e o switch vai ser baseado no tipo da ação;
O meu value vai ser baseado no reducer, que vai receber o quizReducer para fazer a modificação de estado 
e também saber qual estado está atualmente e eu passo o initialstage para padronizar os valores iniciais*/
    