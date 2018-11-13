import React, { Component } from 'react';
import CardControls from './CardControls';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  state = {
    show: false,
    card: {}
  };

  cardFun = () => {
    let card = this.props.card;
    console.log(card);
    this.setState({ card: card, show: false });
  };

  componentDidMount() {
    this.cardFun();
  }

  componentWillUnmount() {
    this.cardFun();
  }

  updateCard = rate => {
    this.setState(state => {
      return (
        (state.card.rating += parseInt(rate)),
        state.card.count++,
        (state.show = false)
      );
    });
  };

  render() {
    console.log(this.props);
    const { card } = this.state.card;
    let back = (
      <div>
        <CardBack card={card} />
        <CardControls
          card={card}
          updateCard={this.updateCard}
          cardFun={this.cardFun}
        />
      </div>
    );
    return (
      <div className="card text-center">
        <CardFront card={this.props.card} />
        <button onClick={() => this.setState({ show: true })}>Show</button>
        {this.state.show ? back : null}
      </div>
    );
  }
}

export default Card;
