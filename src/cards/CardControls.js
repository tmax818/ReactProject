import React, { Component } from 'react';

export default class CardControls extends Component {
  handleClick = e => {
    e.preventDefault();
    console.log(e.target.id);
    this.props.updateCard(e.target.id);
    this.props.cardFun();
  };
  render() {
    console.log(this.props);
    return (
      <div className="btn-group">
        <button
          id={-1}
          onClick={this.handleClick}
          type="button"
          className="btn btn-danger"
        >
          No
        </button>
        <button
          id={0}
          onClick={this.handleClick}
          type="button"
          className="btn btn-warning"
        >
          Maybe
        </button>
        <button
          id={1}
          onClick={this.handleClick}
          type="button"
          className="btn btn-success"
        >
          Yes!
        </button>
      </div>
    );
  }
}
