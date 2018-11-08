import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCard } from '../actions';
import CardFront from './CardFront';
import CardBack from './CardBack';
import ShowBtn from './ShowBtn';

class CardsContainer extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.showCard();
  };

  makeCard = cards => {
    return cards.shift();
  };

  render() {
    console.log(this.props.cards);
    const { location } = this.props;
    const { cards } = location.state;
    let card = this.makeCard(cards);
    return (
      <div>
        <p>CardsContainer</p>
        <h4>{location.state.title}</h4>
        <CardFront card={card} />
        <ShowBtn handleClick={this.handleClick} />
        {this.props.cards.show ? <CardBack card={card} /> : null}
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
  return {
    showCard: () => {
      dispatch(showCard());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
