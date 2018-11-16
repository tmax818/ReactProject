import React, { Component } from 'react';
import CardUpdate from './CardUpdate';

class Card extends Component {
  state = {
    card: {},
    show: false,
    editing: false
  };

  toggleShow = () => {
    this.setState(prevState => {
      return { editing: !prevState.editing };
    });
  };

  render() {
    const { card, handleDelete, handleUpdate } = this.props;
    let display = (
      <div>
        <span> Front: {card.front}</span>
        <br />
        <span> Back: {card.back}</span>
      </div>
    );
    return (
      <div className="card">
        <div className="card bg-light">
          <div className="card-body text-center">
            {this.state.editing ? (
              <CardUpdate
                card={card}
                handleUpdate={handleUpdate}
                toggleShow={this.toggleShow}
              />
            ) : (
              display
            )}

            <hr />
            <p>
              card views: {card.count} card score:
              {card.rating}
            </p>
            <button
              onClick={this.toggleShow}
              className="btn btn-sm btn-success"
            >
              Edit
            </button>
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
