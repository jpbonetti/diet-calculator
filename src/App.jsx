import React from 'react';
import TmbComponent from './components/TmbComponent';
import ExerciseComponent from './components/Exercise'
import logo from './images/logo.svg';
import './App.css';

export default function App() {
  const [dietInformations, setDietInformations] = React.useState({
    tmbInformations: {
      age: undefined,
      weight: undefined,
      height: undefined,
      gender: undefined,
      result: 0
    }
  });

  const handleChangeDietInformations = (newInformations) => {
    setDietInformations(newInformations);
  };

  return (
    <form noValidate autoComplete="off">
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <h2>DIET CALCULATOR</h2>
                <h6>Entre com as informações abaixo:</h6>
              </p>

              <TmbComponent 
                dietInformations={dietInformations} 
                handleChangeDietInformations={handleChangeDietInformations}>
              </TmbComponent>

              <ExerciseComponent 
                dietInformations={dietInformations}>
              </ExerciseComponent>
            </header>
          </div>
    </form>
  );
}