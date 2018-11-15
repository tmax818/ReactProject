import React, { Component } from 'react';

class CardUpdate extends Component {
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
      count: this.props.card.count,
      rating: this.props.card.rating,
      subject_id: this.props.card.subject_id
    });
  };

  componentDidMount() {
    this.setId();
  }

  handleFrontChange = e => {
    e.preventDefault();
    this.setState({ front: e.target.value });
  };

  handleBackChange = e => {
    e.preventDefault();
    this.setState({ back: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.setState({ front: '', back: '' });
    this.props.toggleShow();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Front:{' '}
          <input
            value={this.state.front}
            type="text"
            onChange={this.handleFrontChange}
          />
          Back:{' '}
          <input
            value={this.state.back}
            type="text"
            onChange={this.handleBackChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default CardUpdate;
