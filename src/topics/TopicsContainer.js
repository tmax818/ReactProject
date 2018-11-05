import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics, postTopic } from '../actions';
import TopicList from './TopicList';
import NewForm from '../common/NewForm';

class TopicsContainer extends Component {
  componentDidMount() {
    if (this.props.topics.length === 0) {
      this.props.fetchTopics();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Topics Container</p>
        <TopicList props={this.props} />
        <hr />
        <h4>Add New Topic</h4>
        <NewForm postFunc={this.props.postTopic} />
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
    },

    postTopic: topic => {
      dispatch(postTopic(topic));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(TopicsContainer);
