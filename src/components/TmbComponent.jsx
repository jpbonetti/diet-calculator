import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import './TmbComponent.css';

export default class TmbComponent extends Component {

  tbmbnformations = {
    age: undefined,
    weight: undefined,
    height: undefined,
    gender: undefined,
    result: 0
  }

  constructor(props) {
    super(props);

    this.calculate = this.calculate.bind(this);
  }

  handleChangeTextFields(e) {
    this.tbmbnformations[e.target.name] = parseFloat(e.target.value);
  }

  handleChangeRadioButtons(e) {
    this.tbmbnformations.gender = e.target.value;
  }

  calculate() {
    debugger;
    if (this.tbmbnformations.gender === undefined || this.tbmbnformations.gender === 'male') {
      this.tbmbnformations.result = 66 + (13.8 * this.tbmbnformations.weight) + (5 * this.tbmbnformations.height) - (6.8 * this.tbmbnformations.age);
    } else {
      this.tbmbnformations.result = 655 + (9.6 * this.tbmbnformations.weight) + (1.8 * this.tbmbnformations.height) - (4.7 * this.tbmbnformations.age);
    }

    window.alert(this.tbmbnformations.result);
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
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup defaultValue="male" aria-label="gender" name="gender1" value={this.tbmbnformations.gender} onChange={this.handleChangeRadioButtons.bind(this)}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
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