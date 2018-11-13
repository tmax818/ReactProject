import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import CardList from './CardList';

class CardsContainer extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    this.props.fetchCards(this.props.match.url);
  }

  render() {
    console.log(this.props);
    const { location } = this.props;
    return (
      <div>
        card container
        <h3>{location.state.title}</h3>
        <button onClick={() => this.setState({ show: true })}>
          Edit Cards
        </button>
        {this.state.show ? <CardList cards={this.props.cards} /> : null}
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
