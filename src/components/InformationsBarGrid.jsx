import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './InformationsBarGrid.css';

export default class InformationsBarGridComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmbInformations: props.dietInformations.tmbInformations
    };
  }

  render() {
		return (
			<React.Fragment>
        <Grid item>
          <Paper 
            className="paper-tmb-informations">
              TAXA DE METABOLISMO BASAL: {this.state.tmbInformations.tmbResult + this.state.tmbInformations.exerciseResult} KCAL
          </Paper>
        </Grid>
      </React.Fragment>
    )};
}