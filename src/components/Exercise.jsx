import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './Exercise.css';

export default class ExerciseComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmbInformations: props.dietInformations.tmbInformations,
      buttons: {
        nenhum: {
          active: true
        },
        pouco: {
          active: false
        },
        moderado: {
          active: false
        },
        intenso: {
          active: false
        },
        muitointenso: {
          active: false
        }
      }
    };
  }

  handleClick(event) {

    const tmb = this.state.tmbInformations.tmbResult;
    this.resetAllStateButtons();

    this.state.buttons[event.target.outerText.replace(" ", "").toLowerCase()].active = true;
    this.setState(this.state);

    if (this.state.buttons.nenhum.active) {
      this.state.tmbInformations.exerciseResult = tmb * 1.2;
    } else if (this.state.buttons.pouco.active) {
      this.state.tmbInformations.exerciseResult = tmb * 1.375;
    } else if (this.state.buttons.moderado.active) {
      this.state.tmbInformations.exerciseResult = tmb * 1.55;
    } else if (this.state.buttons.intenso.active) {
      this.state.tmbInformations.exerciseResult = tmb * 1.725;
    } else if (this.state.buttons.muitointenso.active) {
      this.state.tmbInformations.exerciseResult = tmb * 1.9;
    }

    this.props.handleChangeTmbInformations(this.state.tmbInformations);
  }

  resetAllStateButtons() {
    var buttonsName = ['nenhum', 'pouco', 'moderado', 'intenso', 'muitointenso'];
    buttonsName.forEach(item => {
      this.state.buttons[item].active = false;
    });
  }

  render() {
		return (
			<React.Fragment>
        <div className="teste">
          <span className="descryption-header">Qual é o seu nível de atividade diária?</span>

          <div className="group-buttons">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button 
                className={this.state.buttons['nenhum'].active ? "active-button" : "deactive-button"}
                onClick={this.handleClick.bind(this)}>Nenhum
              </Button>
              <Button 
                className={this.state.buttons['pouco'].active ? "active-button" : "deactive-button"} 
                onClick={this.handleClick.bind(this)}>Pouco
              </Button>
              <Button 
                className={this.state.buttons['moderado'].active ? "active-button" : "deactive-button"}
                onClick={this.handleClick.bind(this)}>Moderado
              </Button>
              <Button 
                className={this.state.buttons['intenso'].active ? "active-button" : "deactive-button"}
                onClick={this.handleClick.bind(this)}>Intenso
              </Button>
              <Button 
                className={this.state.buttons['muitointenso'].active ? "active-button" : "deactive-button"}
                onClick={this.handleClick.bind(this)}>Muito Intenso
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </React.Fragment>
    )};
}