import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

    this.state = {
      snackBar: {
        open: false,
        transition: Fade
      },
      dialog: {
        open: false
      }
    }

    this.calculate = this.calculate.bind(this);
  }

  handleChangeTextFields(e) {
    this.tbmbnformations[e.target.name] = parseFloat(e.target.value);
  }

  handleChangeRadioButtons(e) {
    this.tbmbnformations.gender = e.target.value;
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

  handleDialogClose() {
    this.setState({ dialog: { open: false }});
  }

  validateMandatoryTMBInformations() {
    if (this.tbmbnformations.age && this.tbmbnformations.weight && this.tbmbnformations.height) {
      return true;
    }

    return false;
  }

  calculate() {
    if (!this.validateMandatoryTMBInformations()) {
      this.handleSnackBarOpen({ snackBar: { open: true, transition: Fade }});
      return;
    }

    if (this.tbmbnformations.gender === undefined || this.tbmbnformations.gender === 'male') {
      this.tbmbnformations.result = 66 + (13.8 * this.tbmbnformations.weight) + (5 * this.tbmbnformations.height) - (6.8 * this.tbmbnformations.age);
    } else {
      this.tbmbnformations.result = 655 + (9.6 * this.tbmbnformations.weight) + (1.8 * this.tbmbnformations.height) - (4.7 * this.tbmbnformations.age);
    }

    this.handleDialogOpen();
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
            value={this.tbmbnformations.gender} 
            onChange={this.handleChangeRadioButtons.bind(this)}>
              <FormControlLabel value="male" control={<Radio className="radio-button-gender-color"/>} label="Masculino" />
              <FormControlLabel value="female" control={<Radio className="radio-button-gender-color"/>} label="Feminino" />
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

          <Dialog
            open={this.state.dialog.open}
            onClose={this.handleDialogClose.bind(this)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">{"Sua taxa de metabolismo basal(TMB) é:"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.tbmbnformations.result} kcal
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose.bind(this)} color="primary" autoFocus>
                  OK
                </Button>
              </DialogActions>
          </Dialog>
        </form>
      </React.Fragment>
    )};
}