import React, { Component } from 'react';
import CardControls from './card/CardControls';

export default class StudyCard extends Component {
  state = {
    show: false,
    count: 0
  };

  render() {
    console.log(this.prop);
    let back = (
      <div>
        <h3>back</h3>
        <CardControls />
      </div>
    );
    return (
      <div className="ui card">
        <h3>what</h3>
        <button onClick={() => this.setState({ show: true })}>show</button>
        {this.state.show && back}
      </div>
    );
  }
}
