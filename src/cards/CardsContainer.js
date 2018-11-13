import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardControls from './CardControls';
import Card from './Card';
import CardFront from './CardFront';
import CardBack from './CardBack';

class CardsContainer extends Component {
  state = {
    show: false,
    card: {}
  };

  cardFun = () => {
    let card = this.props.location.state.cards.shift();
    console.log(card);
    this.setState({ card: card });
  };

  componentDidMount() {
    this.cardFun();
  }

  // componentWillUnmount() {
  //   this.cardFun();
  // }

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
    const { title } = this.props.location.state;
    return (
      <div>
        card container
        <h1>{title}</h1>
        <Card
          card={this.state.card}
          updateCard={this.updateCard}
          cardFun={this.cardFun}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    subjects: state.subjects,
    topics: state.topics,
    cards: state.cards
  };
};

const mapDispathtoProps = dispatch => {
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
