import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

const $ = window.$;

export default class App extends Component {

  tmbInformations = {  
    age: undefined,
    weight: undefined,
    height: undefined,
    gender: "male",
    result: 0
  }; 

  constructor(props) {
    super(props);

    this.calculateTMB = this.calculateTMB.bind(this);
    this.resetTBMInformations = this.resetTBMInformations.bind(this);
  }

  setGender(event) {
    this.tmbInformations.gender = event.target.value;
  }

  handleChange = ({ target }) => {
    this.tmbInformations[target.name] = parseFloat(target.value);
  };

  resetTBMInformations() {
    document.getElementById("form").reset(); 

    this.tmbInformations.age = undefined;
    this.tmbInformations.weight = undefined;
    this.tmbInformations.height = undefined;
  }

  calculateTMB() {
    if (!this.validateTMBInformations()) {
      window.alert("Preencha as informações");
      return;
    }

    if (this.tmbInformations.gender === "male") {
      this.tmbInformations.result = (66 + (13.8 * this.tmbInformations.weight) + (5 * this.tmbInformations.height) - (6.8 * this.tmbInformations.age));
    } else {
      this.tmbInformations.result = (655 + (9.6 * this.tmbInformations.weight) + (1.8 * this.tmbInformations.height) - (4.7 * this.tmbInformations.age));
    }
    
    window.alert("Total de calorias: " + this.tmbInformations.result);
    
    this.resetTBMInformations();
  }

  validateTMBInformations() {
    if (!this.tmbInformations.age || !this.tmbInformations.weight || !this.tmbInformations.height) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <form id="form">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <h2>DIET CALCULATOR</h2>
                <h6>Entre com as informações abaixo:</h6>
              </p>

              <input className="tmb-input-informations" type="input" name="age" placeholder="Idade" value={this.tmbInformations.age} onChange={this.handleChange}/>
              <input className="tmb-input-informations" type="input" name="weight" placeholder="Peso(Kg)" value={this.tmbInformations.weight} onChange={this.handleChange}/>
              <input className="tmb-input-informations" type="input" name="height" placeholder="Altura(cm)" value={this.tmbInformations.height} onChange={this.handleChange}/>

              <div className="group-input-gender" onChange={this.setGender.bind(this)}>
                <input type="radio" checked="true" value="male" name="gender"/> <span className="span-input-gender">Masculino</span>
                <input type="radio" value="female" name="gender"/> <span className="span-input-gender">Feminino</span>
              </div>
      
              <input className="calculate-button" type="button" value="Calcular" onClick={this.calculateTMB.bind(this)}/>
            </header>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

