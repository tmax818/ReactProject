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

  handleDelete = (path, topic, e) => {
    e.preventDefault();
    this.props.deleteTopic(path, topic);
  };

  render() {
    console.log(this.props);
    const { topics, match } = this.props;
    return (
      <div>
        <p>Topics Container</p>
        <TopicList
          topics={topics}
          match={match}
          handleDelete={this.handleDelete}
        />
        <hr />
        <h4>Add New Topic</h4>
        <NewForm postFunc={this.props.postTopic} path={this.props.match.url} />
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
