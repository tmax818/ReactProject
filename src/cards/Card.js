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
      <div className="ui cards">
        <div className="card">
          <div className="content">
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
            <p className="extra content">
              card views: {card.count} card score:
              {card.rating}
            </p>
            <div className="ui two buttons">
              <button
                onClick={this.toggleShow}
                className="ui basic green button"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(card.id)}
                className="ui basic red button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
