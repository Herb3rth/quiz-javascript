import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QuizProvider} from './context/quiz' //Assim eu vou prover o contexto dos meus componentes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QuizProvider> 
     <App />
   </QuizProvider> 
  </React.StrictMode>
); 

/* Aqui eu encapsulo o app em QuizProvider;
Assim eu tenho acesso ao contexto por meio dos componentes*/
