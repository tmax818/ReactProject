import React, { Component } from 'react';

export default class CardControls extends Component {
  state = {
    card: this.props.card,
    show: false
  };

  updateCard = delta => {
    this.setState(prevState => {
      return {
        count: prevState.card.count++,
        rating: (prevState.card.rating += delta),
        show: true
      };
    });
    this.props.handleUpdate(this.state.card);
  };

  render() {
    return (
      <div>
        <div>
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">{this.state.card.back}</div>
                <button
                  onClick={() => this.updateCard(-1)}
                  className="ui basic red button"
                >
                  No
                </button>
                <button
                  onClick={() => this.updateCard(0)}
                  className="ui basic yellow button"
                >
                  Maybe
                </button>
                <button
                  onClick={() => this.updateCard(1)}
                  className="ui basic green button"
                >
                  Yes!
                </button>
                {this.state.show && (
                  <button
                    onClick={this.props.incrementCount}
                    className="ui basic grey button"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
