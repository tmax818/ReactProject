import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardControls from './CardControls';
import CardFront from './CardFront';
import CardBack from './CardBack';

class CardsContainer extends Component {
  state = {
    show: false,
    card: {}
  };

  cardFun = () => {
    let card = this.props.location.state.cards.shift();
    this.setState({ card: card });
  };

  componentDidMount() {
    this.cardFun();
  }

  updateCard = rate => {
    this.setState(state => {
      return (state.card.rating += parseInt(rate)), state.card.count++;
    });
  };

  render() {
    console.log(this.state.card);
    const { title } = this.props.location.state;
    let back = (
      <div>
        <CardBack card={this.state.card} />
        <CardControls
          card={this.state.card}
          updateCard={this.updateCard}
          cardFun={this.cardFun}
        />
      </div>
    );
    return (
      <div>
        card container
        <h1>{title}</h1>
        <CardFront card={this.state.card} />
        <button onClick={() => this.setState({ show: true })}>Show</button>
        {this.state.show ? back : null}
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
