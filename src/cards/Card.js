import React, { Component } from 'react';
import CardControls from './CardControls';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  state = {
    show: false,
    card: {},
    Editing: false
  };

  componentDidMount() {
    this.setCard();
  }

  setCard = () => {
    let card = this.props.card;
    console.log(card);
    this.setState({ card: card });
  };

  render() {
    console.log(this.state);
    return (
      <div className="card card-column text-center">
        <h4>
          Front: <CardFront card={this.state.card} />
        </h4>
        <h4>
          Back: <CardBack card={this.state.card} />
        </h4>

        <div className="card-footer text-muted">
          <p>
            card views: {this.props.card.count} card score:
            {this.props.card.rating}
          </p>
          <button className="btn btn-sm btn-danger">Delete</button>
          <button className="btn btn-sm btn-warning">Edit</button>
          <button className="btn btn-sm btn-success">Reset Scores</button>
        </div>
      </div>
    );
  }
}

export default Card;
