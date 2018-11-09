import React, { Component } from 'react';

export default class CardControls extends Component {
  state = {
    card: {
      count: 0,
      rating: null
    }
  };

  componentDidMount() {
    this.setState({ Newcard: this.props.card });
    console.log(this.state.Newcard);
  }

  updateCard = count => {
    this.setState(count => ({
      count: count
    }));
    console.log(this.state.Newcard);
  };

  handleClick = e => {
    e.preventDefault();
    this.updateCard(1);
  };

  render() {
    console.log(this.state.Newcard);
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
