import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCards,
  fetchCard,
  postCard,
  deleteCard,
  updateCard
} from '../actions';
import EditCard from './EditCard';
import StudyCard from './StudyCard';

class CardsContainer extends Component {
  state = {
    showEdit: false,
    showStudy: false
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

  toggleShow = () => {
    this.setState(prevState => {
      return { showEdit: !prevState.showEdit, showStudy: false };
    });
  };

  toggleStudyShow = () => {
    this.setState(prevState => {
      return {
        showStudy: !prevState.showStudy,
        showEdit: false
      };
    });
  };

  render() {
    const { location, match, cards } = this.props;
    return (
      <div className="text-center">
        card container
        <h3>{location.state.title}</h3>
        <button onClick={this.toggleShow}>Edit Cards</button>
        <button onClick={this.toggleStudyShow}>Study Cards</button>
        {this.state.showEdit && (
          <EditCard
            cards={cards}
            match={match}
            location={location}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
            handleNewCard={this.handleNewCard}
            subject_id={match.params.sid}
          />
        )}
        {this.state.showStudy && (
          <StudyCard
            fetchCard={this.props.fetchCard}
            cards={cards}
            path={match.url}
            updateCard={this.props.updateCard}
          />
        )}
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
