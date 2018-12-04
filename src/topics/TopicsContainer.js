import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics, postTopic, deleteTopic } from '../actions';
import TopicList from './TopicList';
import NewForm from '../common/NewForm';

class TopicsContainer extends Component {
  componentDidMount() {
    if (this.props.topics.length === 0) {
      this.props.fetchTopics();
    }
  }

  handleDelete = topic => {
    this.props.deleteTopic(this.props.match.url, topic);
  };

  handleNewTopic = topic => {
    console.log(topic);
    this.props.postTopic(this.props.match.url, topic);
  };

  render() {
    const { topics, match } = this.props;
    return (
      <div>
        <TopicList
          topics={topics}
          match={match}
          handleDelete={this.handleDelete}
        />
        <hr />
        <h4>Add New Topic</h4>
        <NewForm handleNew={this.handleNewTopic} />
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

    postTopic: (path, topic) => {
      dispatch(postTopic(path, topic));
    },

    deleteTopic: (path, topic) => {
      dispatch(deleteTopic(path, topic));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(TopicsContainer);
