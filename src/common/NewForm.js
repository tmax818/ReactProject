import React, { Component } from 'react';

class NewForm extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postFunc(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}
export default NewForm;
