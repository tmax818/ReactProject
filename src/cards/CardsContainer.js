import React, { Component } from 'react';

export default class CardsContainer extends Component {
  render() {
    const { location, match } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>CardsContainer</p>
        <h1>{location.state.subject.title}</h1>
      </div>
    );
  }
}
