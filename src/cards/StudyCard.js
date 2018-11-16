import React, { Component } from 'react';
import CardControls from './card/CardControls';

export default class StudyCard extends Component {
  state = {
    show: false,
    count: 0
  };

  changeCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    let count = this.state.count;
    console.log(this.props);
    let back = (
      <div>
        <h3>{this.props.cards[count].back}</h3>
        <CardControls
          card={this.props.cards[count]}
          updateCard={this.props.updateCard}
          path={this.props.path}
          changeCount={this.changeCount}
        />
      </div>
    );
    return (
      <div className="card">
        <h3>{this.props.cards[count].front}</h3>
        <button onClick={() => this.setState({ show: true })}>show</button>
        {this.state.show && back}
      </div>
    );
  }
}
