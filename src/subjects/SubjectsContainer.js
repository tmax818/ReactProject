import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSubject } from '../actions';
import SubjectList from './SubjectList';
import NewForm from '../common/NewForm';

class SubjectsContainer extends Component {
  render() {
    return (
      <div>
        <p>Subjects Container</p>
        <SubjectList props={this.props} />
        <hr />
        <h4>Add New Subject</h4>
        <NewForm
          postFunc={this.props.postSubject}
          path={this.props.match.url}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    subjects: state.subjects
  };
};

const mapDispathtoProps = dispatch => {
  return {
    postSubject: (tid, subject) => {
      dispatch(postSubject(tid, subject));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(SubjectsContainer);
