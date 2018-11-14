import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, postCard, deleteCard } from '../actions';
import CardList from './CardList';
import NewCard from './card/NewCard';

class CardsContainer extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    this.props.fetchCards(this.props.match.url);
  }

  handleNewCard = card => {
    this.props.postCard(this.props.match.url, card);
  };

  handleDelete = x => {
    this.props.deleteCard(this.props.match.url, x);
  };

  render() {
    const { location, match, cards } = this.props;
    return (
      <div>
        card container
        <h3>{location.state.title}</h3>
        <CardList
          cards={cards}
          match={match}
          location={location}
          handleDelete={this.handleDelete}
        />
        <hr />
        <h4>Add New Card</h4>
        <NewCard
          handleNewCard={this.handleNewCard}
          subject_id={match.params.sid}
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
  return {
    fetchCards: path => {
      dispatch(fetchCards(path));
    },

    postCard: (path, value) => {
      dispatch(postCard(path, value));
    },

    deleteCard: (path, value) => {
      dispatch(deleteCard(path, value));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
