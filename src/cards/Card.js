import React, { Component } from 'react';
import CardControls from './CardControls';

export default class Card extends Component {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { card } = this.props;
    let back = (
      <div>
        <h1>{card.back}</h1>
        <CardControls />
      </div>
    );
    console.log(card);
    return (
      <div>
        Card
        <h1>{card.front}</h1>
        <button onClick={this.toggleShow}>Show Answer</button>
        {this.state.show ? back : null}
      </div>
    );
  }
}
