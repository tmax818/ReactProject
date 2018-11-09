import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import CardControls from './CardControls';

class CardsContainer extends Component {
  state = {
    show: false,
    card: {}
  };

  componentWillMount() {
    this.makeCards();
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ show: true });
  };

  makeCards = () => {
    let card = this.props.location.state.cards.shift();
    this.setState({ card: card, show: false });
  };

  updateCard = newCard => {
    this.setState({ card: newCard });
  };

  render() {
    console.log(this.state.card);
    return (
      <div>
        <p>CardsContainer</p>
        <Card
          card={this.state.card}
          makeCards={this.makeCards}
          show={this.state.show}
        />

        {this.state.show ? (
          <CardControls makeCards={this.makeCards} card={this.state.card} />
        ) : (
          <button onClick={this.handleClick}>Show</button>
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
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(CardsContainer);
