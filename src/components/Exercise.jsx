import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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

    if (tmb > 0) {
      if (this.state.buttons.nenhum.active) {
        this.state.tmbInformations.exerciseResult = ((tmb * 1.2) - tmb);
      } else if (this.state.buttons.pouco.active) {
        this.state.tmbInformations.exerciseResult = ((tmb * 1.375) - tmb);
      } else if (this.state.buttons.moderado.active) {
        this.state.tmbInformations.exerciseResult = ((tmb * 1.55) - tmb);
      } else if (this.state.buttons.intenso.active) {
        this.state.tmbInformations.exerciseResult = ((tmb * 1.725) - tmb);
      } else if (this.state.buttons.muitointenso.active) {
        this.state.tmbInformations.exerciseResult = ((tmb * 1.9) - tmb);
      }
    }

    this.props.handleChangeTmbInformations(this.state.tmbInformations);
  }

  resetAllStateButtons() {
    var buttonsName = ['nenhum', 'pouco', 'moderado', 'intenso', 'muitointenso'];
    buttonsName.forEach(item => {
      this.state.buttons[item].active = false;
    });
  }

  scrollToExerciseQuestion() {
    var scrollButtonsGroup = document.getElementById('exercise-buttons-group').offsetTop;
    window.scrollTo({ top: scrollButtonsGroup, behavior: 'smooth'});
  }

  render() {
		return (
			<React.Fragment>
        <div className="panel-size">
          <span className="descryption-header">Qual é o seu nível de atividade diária?</span>

          <div className="group-buttons">
            <ButtonGroup id="exercise-buttons-group" disableElevation variant="contained" color="primary">
              <Button 
                className={this.state.buttons['nenhum'].active ? "question-button active-button" : "question-button deactive-button"}
                onClick={this.handleClick.bind(this)}>Nenhum
              </Button>
              <Button 
                className={this.state.buttons['pouco'].active ? "question-button active-button" : "question-button deactive-button"} 
                onClick={this.handleClick.bind(this)}>Pouco
              </Button>
              <Button 
                className={this.state.buttons['moderado'].active ? "question-button active-button" : "question-button deactive-button"}
                onClick={this.handleClick.bind(this)}>Moderado
              </Button>
              <Button 
                className={this.state.buttons['intenso'].active ? "question-button active-button" : "question-button deactive-button"}
                onClick={this.handleClick.bind(this)}>Intenso
              </Button>
              <Button 
                className={this.state.buttons['muitointenso'].active ? "question-button active-button" : " question-button deactive-button"}
                onClick={this.handleClick.bind(this)}>Muito Intenso
              </Button>
            </ButtonGroup>
          </div>
          <div className="teste-panel">
            <Paper 
              elevation={0}
              className="teste">Pouco ou nenhum exercício</Paper>
            <Paper 
              elevation={0}
              className="teste">1-3 dias <br></br> por semana</Paper>
            <Paper 
              elevation={0}
              className="teste">3-5 dias <br></br> por semana</Paper>
            <Paper 
              elevation={0} 
              className="teste">6-7 dias <br></br> por semana</Paper>
            <Paper 
              elevation={0}
              className="teste">2x por dia ou exercício de elevada intensidade e duração</Paper>
          </div>
        </div>
      </React.Fragment>
    )};
}