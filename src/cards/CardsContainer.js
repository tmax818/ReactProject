import React, { Component } from 'react';
import Card from './Card';

export default class CardsContainer extends Component {
  render() {
    const { location } = this.props;
    const { cards } = location.state;
    let card = cards.shift();
    return (
      <div>
        <p>CardsContainer</p>
        <h4>{location.state.title}</h4>
        <Card card={card} />
      </div>
    );
  }
}
