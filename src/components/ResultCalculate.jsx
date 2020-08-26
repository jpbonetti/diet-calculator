import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import './ResultCalculate.css';

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

    this.calculateResults();
  }

  calculateResults() {
    if (this.state.tmbInformations.tmbResult) {
      this.state.resultCalculate.increase.min = this.state.tmbInformations.tmbResult - 100;
      this.state.resultCalculate.increase.max = this.state.tmbInformations.tmbResult + 100;

      this.state.resultCalculate.decrease.min = this.state.tmbInformations.tmbResult - 200;
      this.state.resultCalculate.decrease.max = this.state.tmbInformations.tmbResult + 200;

      this.state.resultCalculate.keep.min = this.state.tmbInformations.tmbResult - 300;
      this.state.resultCalculate.keep.max = this.state.tmbInformations.tmbResult + 300;
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
              className="card-information">Perder

              {this.state.resultCalculate.increase.min}
              {this.state.resultCalculate.increase.max}
            </Paper>

            <Paper 
              elevation={5}
              className="card-information">Manter

              {this.state.resultCalculate.decrease.min}
              {this.state.resultCalculate.decrease.max}
              </Paper>
            <Paper 
              elevation={5}
              className="card-information">Ganhar

              {this.state.resultCalculate.keep.min}
              {this.state.resultCalculate.keep.max}
              </Paper>
          </div>
        </div>
      </React.Fragment>
    )};
}