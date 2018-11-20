import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCards,
  fetchCard,
  postCard,
  deleteCard,
  updateCard
} from '../actions';

class CardsContainer extends Component {
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

  render() {
    return <div>cardcontainer</div>;
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
