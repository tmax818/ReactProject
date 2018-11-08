import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCard } from '../actions';
import CardFront from './CardFront';
import ShowBtn from './ShowBtn';

class CardsContainer extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.showCard();
  };
  render() {
    const { location } = this.props;
    const { cards } = location.state;
    let card = cards.shift();
    console.log(this.props.cards.show);
    return (
      <div>
        <p>CardsContainer</p>
        <h4>{location.state.title}</h4>
        <CardFront card={card} />
        <ShowBtn handleClick={this.handleClick} />
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
