import React, { Component } from 'react';

export default class CardControls extends Component {
  state = {
    id: null,
    front: '',
    back: '',
    count: 0,
    rating: 0,
    subject_id: null
  };

  setId = () => {
    this.setState({
      id: this.props.card.id,
      front: this.props.card.front,
      back: this.props.card.back,
      count: parseInt(this.props.card.count),
      rating: parseInt(this.props.card.rating),
      subject_id: this.props.card.subject_id
    });
  };

  componentDidMount() {
    this.setId();
  }

  handleClick = e => {
    e.preventDefault();
    let delta = e.target.id;
    this.setState(prevState => {
      return {
        count: parseInt(prevState.count) + 1,
        rating: prevState.rating + parseInt(delta),
        show: !prevState.show
      };
    });
    this.props.updateCard(this.props.path, this.state);
    this.props.changeCount();
  };

  render() {
    console.log(this.state);
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
