import React from 'react';
import TmbComponent from './components/TmbComponent';
import ExerciseComponent from './components/Exercise';
import logo from './images/logo.svg';
import './App.css';
import InformationsBarGridComponent from './components/InformationsBarGrid';

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
                <span className="descryption-header">Entre com as informações abaixo:</span>
              </p>

              <TmbComponent 
                dietInformations={dietInformations} 
                handleChangeDietInformations={handleChangeDietInformations}>
              </TmbComponent>

              <InformationsBarGridComponent
                dietInformations={dietInformations}>
              </InformationsBarGridComponent>

              <ExerciseComponent 
                dietInformations={dietInformations}>
              </ExerciseComponent>
            </header>
          </div>
    </form>
  );
}