import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    show: false
  };

  render() {
    const { card } = this.props;
    return (
      <div>
        Card
        <h1>{card.front}</h1>
        {this.props.show ? <h1>{card.back}</h1> : null}
      </div>
    );
  }
}
