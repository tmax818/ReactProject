import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  state = {
    card: {},
    show: false,
    Editing: false
  };

  render() {
    const { location, match, card, handleDelete } = this.props;
    return (
      <div className="card-group">
        <div className="card bg-light">
          <div className="card-body text-center">
            <span> Front: {card.front}</span>
            <hr />
            <span> Back: {card.back}</span>
            <hr />
            <p>
              card views: {card.count} card score:
              {card.rating}
            </p>
            <Link
              to={{
                pathname: `${match.url}/cards/${card.id}`,
                state: { state: 'test' }
              }}
              className="btn btn-sm btn-warning"
            >
              Edit
            </Link>
            <button className="btn btn-sm btn-success">Reset Scores</button>
            <button
              onClick={() => handleDelete(card.id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
