import React from 'react';
import { Link } from 'react-router-dom';
import Subject from './Subject';

const SubjectList = ({ location, match, subjects }) => {
  let id = parseInt(match.params.id);
  let subjectsList = subjects.filter(subject => {
    return subject.topic_id === id;
  });
  return (
    <div>
      subjectlist
      <h3>{location.state.title}</h3>
      {subjectsList.map((subject, index) => {
        return <Subject key={index} subject={subject} match={match} />;
      })}
    </div>
  );
};
export default SubjectList;
