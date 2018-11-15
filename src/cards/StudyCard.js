import React, { Component } from 'react';
import CardFront from './card/CardFront';
import CardBack from './card/CardBack';

export default class StudyCard extends Component {
  state = {
    cards: [],
    show: false
  };

  componentDidMount() {
    this.setState({ cards: this.props.cards });
  }

  newCard = () => {
    let card = this.state.cards.shift();
    console.log(card);
    return card;
  };
  render() {
    console.log(this.state.cards.length);
    let front = (
      <div className="card-body text-center">
        <CardFront card={this.newCard()} />
      </div>
    );
    let back = (
      <div>
        <CardBack card={this.newCard()} />
      </div>
    );
    return (
      <div className="card">
        <div className="card bg-light" />
        {this.state.cards.length ? front : 'end of deck'}
        <button
          onClick={() => {
            this.setState({ show: true });
          }}
        >
          Show Answer
        </button>
        {this.state.show && back}
      </div>
    );
  }
}
