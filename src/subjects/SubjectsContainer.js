import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSubject, fetchSubjects } from '../actions';
import SubjectList from './SubjectList';
import NewForm from '../common/NewForm';

class SubjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchSubjects(this.props.match.url);
  }

  render() {
    console.log(this.props.subjects);
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
    fetchSubjects: path => {
      dispatch(fetchSubjects(path));
    },

    postSubject: (tid, subject) => {
      dispatch(postSubject(tid, subject));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(SubjectsContainer);
