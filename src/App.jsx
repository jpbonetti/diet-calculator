import React from 'react';
import TmbComponent from './components/TmbComponent';
import logo from './images/logo.svg';
import './App.css';

export default function App() {
  return (
    <form noValidate autoComplete="off">

      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <h2>DIET CALCULATOR</h2>
                <h6>Entre com as informações abaixo:</h6>
              </p>

              <TmbComponent></TmbComponent>
            </header>
          </div>
    </form>
  );
}