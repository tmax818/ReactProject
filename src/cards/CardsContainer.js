import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCards,
  fetchCard,
  postCard,
  deleteCard,
  updateCard
} from '../actions';
import Card from './Card';

class CardsContainer extends Component {
  state = {
    show: false,
    count: 0
  };
  componentDidMount() {
    this.props.fetchCards(this.props.match.url);
  }

  handleNewCard = card => {
    this.props.postCard(this.props.match.url, card);
  };

  handleDelete = card => {
    this.props.deleteCard(this.props.match.url, card);
  };

  handleUpdate = val => {
    this.props.updateCard(this.props.match.url, val);
  };

  makeCardsArray = () => {
    let cardsArray = this.props.cards.map(card => {
      return (
        <Card
          card={card}
          incrementCount={this.incrementCount}
          show={this.state.show}
          showCard={this.showCard}
          handleUpdate={this.handleUpdate}
        />
      );
    });
    return cardsArray;
  };

  incrementCount = () => {
    let count = this.state.count + 1;
    this.setState({ count: count, show: false });
  };

  showCard = () => {
    this.setState({ show: true });
  };

  render() {
    let arr = this.makeCardsArray();
    return <div>{arr[this.state.count]}</div>;
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
    fetchCards: path => {
      dispatch(fetchCards(path));
    },

    fetchCard: (path, value) => {
      dispatch(fetchCard(path, value));
    },

    postCard: (path, value) => {
      dispatch(postCard(path, value));
    },

    deleteCard: (path, value) => {
      dispatch(deleteCard(path, value));
    },

    updateCard: (path, value) => {
      dispatch(updateCard(path, value));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
