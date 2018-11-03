import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from './actions';

class TopicsContainer extends Component {
  componentDidMount() {
    if (this.props.topics.length === 0) {
      this.props.fetchTopics();
    }
  }

  render() {
    console.log(this.props.topics);
    return (
      <div>
        <h1>Topics Container</h1>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    topics: state.topics
  };
};

const mapDispathtoProps = dispatch => {
  return {
    fetchTopics: () => {
      dispatch(fetchTopics());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(TopicsContainer);
