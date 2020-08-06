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
        Perguntas vida ativa
      </React.Fragment>
    )};
}