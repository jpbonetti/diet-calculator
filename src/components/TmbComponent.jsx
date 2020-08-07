import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import './TmbComponent.css';

export default class TmbComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmbInformations: props.dietInformations.tmbInformations,
      snackBar: {
        open: false,
        transition: Fade
      }
    }

    this.calculate = this.calculate.bind(this);
  }

  handleChangeTextFields(e) {
    this.state.tmbInformations[e.target.name] = parseFloat(e.target.value);
  }

  handleChangeRadioButtons(e) {
    this.state.tmbInformations.gender = e.target.value;
  }

  handleSnackBarOpen(newState) {
    this.setState(newState);
  }

  handleSnackBarClose(e) {
    this.setState({ snackBar: { open: false, transition: Fade }});
  }

  handleDialogOpen() {
    this.setState({ dialog: { open: true }});
  }

  validateMandatoryTMBInformations() {
    if (this.state.tmbInformations.age && this.state.tmbInformations.weight && this.state.tmbInformations.height) {
      return true;
    }

    return false;
  }

  calculate() {
    if (!this.validateMandatoryTMBInformations()) {
      this.handleSnackBarOpen({ snackBar: { open: true, transition: Fade }});
      return;
    }

    if (this.state.tmbInformations.gender === undefined || this.state.tmbInformations.gender === 'male') {
      this.state.tmbInformations.result = parseFloat((66.5 + (13.8 * this.state.tmbInformations.weight) 
        + (5 * this.state.tmbInformations.height) - (6.8 * this.state.tmbInformations.age)).toFixed(2));
    } else {
      this.state.tmbInformations.result = parseFloat((655.1 + (9.5 * this.state.tmbInformations.weight) 
        + (1.8 * this.state.tmbInformations.height) - (4.7 * this.state.tmbInformations.age)).toFixed(2));
    }

    this.handleDialogOpen();
    
    this.props.handleChangeDietInformations(this.state.tmbInformations);
  }

  render() {
		return (
			<React.Fragment>
        <form id="form-tmb-informations">
          <div className="text-field-margin">
            <TextField 
              required 
              name="age"
              className="tmb-text-field" 
              type="number" 
              label="Idade" 
              variant="filled" 
              value={this.state.tmbInformations.age}
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
              value={this.state.tmbInformations.weight}
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
              value={this.state.tmbInformations.height}
              onChange={this.handleChangeTextFields.bind(this)}
            />
          </div>

          <FormLabel 
            className="form-label-gender"
            component="legend">
            Sexo
          </FormLabel>
          <RadioGroup 
            className="radio-group-gender"
            defaultValue="male" 
            aria-label="gender" 
            name="gender1" 
            value={this.state.tmbInformations.gender} 
            onChange={this.handleChangeRadioButtons.bind(this)}>
              <FormControlLabel 
                value="male" 
                control={<Radio className="radio-button-gender-color"/>} 
                label="Masculino" />
              <FormControlLabel 
                value="female" 
                control={<Radio className="radio-button-gender-color"/>} 
                label="Feminino" />
          </RadioGroup>

          <Button 
            className="button-calculate" 
            variant="outlined" 
            color="secondary" 
            onClick={this.calculate}>
            Calcular
          </Button>
        
          <Snackbar
            open={this.state.snackBar.open}
            onClose={this.handleSnackBarClose.bind(this)}
            TransitionComponent={this.state.snackBar.transition}
            message="Preencha os campos obrigatórios"
            key={this.state.snackBar.transition.name}
          />
        </form>
      </React.Fragment>
    )};
}