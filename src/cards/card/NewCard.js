import React, { Component } from 'react';

class NewCard extends Component {
  state = {
    front: '',
    back: '',
    subject_id: null
  };

  setId = () => {
    this.setState({ subject_id: parseInt(this.props.subject_id) });
  };

  componentDidMount() {
    this.setId();
  }

  handleFrontChange = e => {
    e.preventDefault();
    this.setState({
      front: e.target.value
    });
  };

  handleBackChange = e => {
    e.preventDefault();
    this.setState({
      back: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.front, this.state.back);
    this.props.handleNewCard(this.state);
    this.setState({ front: '', back: '' });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <input
              value={this.state.front}
              type="text"
              onChange={this.handleFrontChange}
              className="form-control"
              id="front"
              placeholder="front"
            />
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <input
              value={this.state.back}
              type="text"
              onChange={this.handleBackChange}
              className="form-control"
              id="back"
              placeholder="back"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default NewCard;
