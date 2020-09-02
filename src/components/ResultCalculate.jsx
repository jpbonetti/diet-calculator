import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import './ResultCalculate.css';
import increaseIcon from '../images/increase_icon.png';
import keepIcon from '../images/keep_icon.png';
import decreaseIcon from '../images/decrease_icon.png';

export default class ResultCalculateComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmbInformations: props.dietInformations.tmbInformations,
      resultCalculate: {
        increase: {
          min: 0,
          max: 0
        },
        decrease: {
          min: 0,
          max: 0
        },
        keep: {
          min: 0,
          max: 0
        }
      }
    };
  }

  calculateResults() {
    if (this.state.tmbInformations.tmbResult) {
      var totalCalories = this.state.tmbInformations.tmbResult + this.state.tmbInformations.exerciseResult;

      this.state.resultCalculate.decrease.min = (totalCalories - 500).toFixed(2).replace(".", ",");
      this.state.resultCalculate.decrease.max = (totalCalories - 200).toFixed(2).replace(".", ",");

      this.state.resultCalculate.keep.min = (totalCalories - 100).toFixed(2).replace(".", ",");
      this.state.resultCalculate.keep.max = (totalCalories).toFixed(2).replace(".", ",");

      this.state.resultCalculate.increase.min = (totalCalories + 100).toFixed(2).replace(".", ",");
      this.state.resultCalculate.increase.max = (totalCalories + 500).toFixed(2).replace(".", ",");
    }
  }

  scrollToResultCalculate() {
    var scrollButtonsGroup = document.getElementById('informations-panel').offsetTop;
    window.scrollTo({ top: scrollButtonsGroup, behavior: 'smooth'});
  }

  render() {
		return (
			<React.Fragment>
        <div className="result-panel-size">
          <span className="descryption-header">Seu resultado é:</span>
          
          <div id="informations-panel" className="informations-panel">
            <Paper 
              elevation={5}
              className="card-information">
              <div className="title-card-information text-shadow">Perder peso</div>
              <div className="result-card-information text-shadow">
                {this.state.resultCalculate.decrease.min} até {this.state.resultCalculate.decrease.max} calorias por dia
              </div>
              
              <img className="image-card-information" src={decreaseIcon}/>
              <div className="descryption-card-information">Essa janela de calorias permite que você perca de 0,5kg por semana</div>
            </Paper>
            <Paper 
              elevation={5}
              className="card-information">
              <div className="title-card-information text-shadow">Manter peso</div>
              <div className="result-card-information text-shadow">
                {this.state.resultCalculate.keep.min} até {this.state.resultCalculate.keep.max} calorias por dia
              </div>

              <img className="image-card-information" src={keepIcon}/>
              <div className="descryption-card-information">Essa janela de calorias permite que você mantenha o seu peso</div>
            </Paper>
            <Paper 
              elevation={5}
              className="card-information">
              <div className="title-card-information text-shadow">Ganhar peso</div>
              <div className="result-card-information text-shadow">
                {this.state.resultCalculate.increase.min} até {this.state.resultCalculate.increase.max} calorias por dia
              </div>

              <img className="image-card-information" src={increaseIcon}/>
              <div className="descryption-card-information">Essa janela de calorias permite que você ganhe até 0,5kg por semana</div>
            </Paper>
          </div>
        </div>
      </React.Fragment>
    )};
}