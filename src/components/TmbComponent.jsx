import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './TmbComponent.css';

export default class TmbComponent extends Component {

  tbmbnformations = {
    age: undefined,
    weight: undefined,
    height: undefined,
    result: 0
  }

  constructor(props) {
    super(props);

    this.calculate = this.calculate.bind(this);
  }

  handleChangeTextFields(e) {
    this.tbmbnformations[e.target.name] = parseFloat(e.target.value);
  }

  calculate() {

    console.log("HOMENS: " + 66 + (13.8 * this.tbmbnformations.weight) + (5 * this.tbmbnformations.height) - (6.8 * this.tbmbnformations.age));
    console.log("MULHERES: " + 655 + (9.6 * this.tbmbnformations.weight) + (1.8 * this.tbmbnformations.height) - (4.7 * this.tbmbnformations.age));
  }

  render() {
		return (
			<React.Fragment>
      <div>
        <div className="text-field-margin">
          <TextField 
            required 
            name="age"
            className="tmb-text-field" 
            type="number" 
            label="Idade" 
            variant="filled" 
            value={this.tbmbnformations.age}
            onChange={this.handleChangeTextFields.bind(this)}
          />
        </div>
        <div className="text-field-margin">
          <TextField 
            required 
            name="weight"
            className="tmb-text-field" 
            type="number" 
            label="Peso(Kg)" 
            variant="filled" 
            value={this.tbmbnformations.weight}
            onChange={this.handleChangeTextFields.bind(this)}
          />
        </div>
        <div className="text-field-margin">
          <TextField 
            required 
            name="height"
            className="tmb-text-field" 
            type="number" 
            label="Altura(cm)" 
            variant="filled" 
            value={this.tbmbnformations.height}
            onChange={this.handleChangeTextFields.bind(this)}
          />
        </div>
        <div>
          <Button 
            className="Button" 
            variant="outlined" 
            color="secondary" 
            onClick={this.calculate}>
            Calcular
          </Button>
        </div>
      </div>
      </React.Fragment>
    )};
}