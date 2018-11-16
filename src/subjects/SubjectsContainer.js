import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSubject, deleteSubject, fetchSubjects } from '../actions';
import SubjectList from './SubjectList';
import NewForm from '../common/NewForm';

class SubjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
  }

  handleDelete = (path, subject, e) => {
    this.props.deleteSubject(path, subject);
  };

  render() {
    const { location, match, subjects, postSubject } = this.props;
    console.log(this.props.subjects);
    return (
      <div>
        <SubjectList
          location={location}
          match={match}
          subjects={subjects}
          handleDelete={this.handleDelete}
        />
        <hr />
        <h4>Add New Subject</h4>
        <NewForm postFunc={postSubject} path={match.url} />
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
    },

    deleteSubject: (path, subject) => {
      dispatch(deleteSubject(path, subject));
    },

    fetchSubjects: () => {
      dispatch(fetchSubjects());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(SubjectsContainer);
