import './App.css';
import Test from "./components/test/Test";
import testDataArray from './data/testData.json';
import React, {useState} from "react";

function App() {
  const testData = [...testDataArray];

  const [currentQuestion, setCurrentQuestion] = useState({data: testData[0], number: 0});

  const toggleToNext = (questionId) => {
    if(testData.length - 1 >= questionId){
      setCurrentQuestion({data: testData[questionId], number: questionId});
    } else {
      setCurrentQuestion({data: testData[0], number: 0});
    }
  };


  return (
    <div className="App">
      {currentQuestion && <Test questionData={currentQuestion.data} questionNumber={currentQuestion.number} toggleNext={toggleToNext}/>}
    </div>
  );
}

export default App;
