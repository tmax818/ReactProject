import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSubject } from '../actions';
import SubjectList from './SubjectList';
import NewForm from '../common/NewForm';

class SubjectsContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <SubjectList
          location={this.props.location}
          match={this.props.match}
          subjects={this.props.subjects}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    subjects: state.subjects,
    topics: state.topics
  };
};

const mapDispathtoProps = dispatch => {
  return {
    postSubject: (path, subject) => {
      dispatch(postSubject(path, subject));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(SubjectsContainer);
