import React from 'react';
import TmbComponent from './components/TmbComponent';
import ExerciseComponent from './components/Exercise';
import logo from './images/logo.svg';
import './App.css';
import InformationsBarGridComponent from './components/InformationsBarGrid';
import ResultCalculateComponent from './components/ResultCalculate';

export default function App() {
  const [dietInformations, setDietInformations] = React.useState({
    tmbInformations: {
      age: undefined,
      weight: undefined,
      height: undefined,
      gender: undefined,
      tmbResult: 0,
      exerciseResult: 0
    }
  });
  
  const exerciseQuestionsComponent = React.createRef();
  const resultCalculateComponent = React.createRef();

  const handleChangeTmbInformations = (newInformations) => {
    setDietInformations({...dietInformations, tmbInformations: newInformations});
  };

  const scrollToExerciseQuestions = () => {
    exerciseQuestionsComponent.current.scrollToExerciseQuestion();
  }

  const scrollToResultCalculate = () => {
    resultCalculateComponent.current.scrollToResultCalculate();
  }

  const calculateResults = () => {
    resultCalculateComponent.current.calculateResults();
  }

  return (
    <form noValidate autoComplete="off">
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <h2>DIET CALCULATOR</h2>
                <span className="descryption-header">Entre com as informações abaixo:</span>
              </p>

              <TmbComponent 
                dietInformations={dietInformations} 
                handleChangeTmbInformations={handleChangeTmbInformations}
                scrollToExerciseQuestions={scrollToExerciseQuestions}>
              </TmbComponent>

              <InformationsBarGridComponent
                dietInformations={dietInformations}>
              </InformationsBarGridComponent>

              <ExerciseComponent 
                ref={exerciseQuestionsComponent}
                dietInformations={dietInformations}
                scrollToResultCalculate={scrollToResultCalculate}
                handleChangeTmbInformations={handleChangeTmbInformations}
                calculateResults={calculateResults}>
              </ExerciseComponent>

              <ResultCalculateComponent
                ref={resultCalculateComponent}
                dietInformations={dietInformations}>
              </ResultCalculateComponent>
            </header>
          </div>
    </form>
  );
}