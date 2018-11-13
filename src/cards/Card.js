import React, { Component } from 'react';
import CardControls from './CardControls';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  state = {
    show: false
  };

  render() {
    const { card, updateCard, cardFun } = this.props;
    let back = (
      <div>
        <CardBack card={card} />
        <CardControls card={card} updateCard={updateCard} cardFun={cardFun} />
      </div>
    );
    return (
      <div>
        <CardFront card={card} />
        <button onClick={() => this.setState({ show: true })}>Show</button>
        {this.state.show ? back : null}
      </div>
    );
  }
}

export default Card;
