import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import Card from './Card';

class CardsContainer extends Component {
  componentDidMount() {
    this.props.fetchCards(this.props.match.url);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
  }

  render() {
    console.log(this.props.cards);
    return (
      <div>
        card container
        <h1 />
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
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
