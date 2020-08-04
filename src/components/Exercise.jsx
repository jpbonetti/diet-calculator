import React, { Component } from 'react';

export default class ExerciseComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmbInformations: props.dietInformations.tmbInformations
    };
  }

  render() {
		return (
			<React.Fragment>
        METABOLISMO BASAL {this.state.tmbInformations.result} Kcal
      </React.Fragment>
    )};
}