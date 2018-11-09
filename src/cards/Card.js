import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    show: false
  };

  render() {
    const { card } = this.props;
    const back = (
      <div className="card text-center">
        <h1>{card.back}</h1>
      </div>
    );
    return (
      <div className="card text-center">
        Card
        <h1>{card.front}</h1>
        {this.props.show ? back : null}
      </div>
    );
  }
}
