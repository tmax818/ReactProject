import React from 'react';
import Subject from './Subject';

const SubjectList = ({ location, match, subjects, handleDelete }) => {
  let id = parseInt(match.params.id);
  let subjectsList = subjects.filter(subject => {
    return subject.topic_id === id;
  });
  return (
    <div>
      subjectlist
      <h3>{location.state.title}</h3>
      {subjectsList.map((subject, index) => {
        return (
          <Subject
            key={index}
            subject={subject}
            match={match}
            handleDelete={() => handleDelete(subject.id)}
          />
        );
      })}
    </div>
  );
};
export default SubjectList;
