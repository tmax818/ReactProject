import React, { Component } from 'react';

export default class StudyCard extends Component {
  state = {
    cards: [],
    show: false
  };

  componentDidMount() {
    this.setState(prevState => {
      return {
        cards: prevState.cards.concat(this.props.cards)
      };
    });
  }

  render() {
    console.log(this.state.cards[0]);
    return <div className="card">holder</div>;
  }
}
