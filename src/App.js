import logo from './logo.svg';
import './App.css';
import questions from './questions';
import { useState } from 'react';

function App() {
 const [questionIndex, setQuestionIndex] = useState(0);
 const [score, setScore] = useState(0);
 const [showScore, setShowScore] = useState(false);
 const [value, setValue] = useState(500);

 const currentQuestion = questions[questionIndex];

 const selectOption = (idx) => {
  if(currentQuestion.answer === idx)
  {
    setScore(score + 1);
  }
  const nextQ = questionIndex + 1;
  if (nextQ < questions.length) {
    setQuestionIndex(questionIndex + 1);
  }else{
    setShowScore(true);
  }
 };
const reset = () => {
  setQuestionIndex(0);
  setScore(0);
  setShowScore(false);
};
const increase = () => {
  setValue(value + 1);

}

  return (
    <div className="quiz_container">
      { showScore ? 
      (<div>
      <h1>Quiz Completed</h1>
      <h1>Your Score is: {score}</h1><br/>
      <button className='button' onClick={reset}> Start New </button>
      </div>) : (<div className='quiz_question'>
       <p>{currentQuestion.question}</p>
      <div className='quiz_answer'>
        <ul className='quiz_answerul'>
          {currentQuestion.options.map((option, i) => {
          return <li className='quiz_answerli' onClick={() => selectOption(i)}>{option}</li>
          })}
          </ul>
      </div>
      </div>)}
      {/* <button onClick={increase}>Increase Value: {value}</button> */}
    </div>
  );
}

export default App;
