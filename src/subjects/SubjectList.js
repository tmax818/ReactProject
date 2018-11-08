import React from 'react';
import { Link } from 'react-router-dom';

const SubjectList = ({ location, match, subjects }) => {
  let id = parseInt(match.params.id);
  let subjectsList = subjects.filter(subject => {
    return subject.topic_id === id;
  });
  console.log(subjectsList);
  return (
    <div>
      subjectlist
      <h3>{location.state.title}</h3>
      {subjectsList.map(subject => {
        return (
          <Link
            key={subject.id}
            to={{
              pathname: `${match.url}/subjects/${subject.id}`,
              state: { cards: subject.cards, title: subject.title }
            }}
            className="btn btn-primary"
          >
            {subject.title}
          </Link>
        );
      })}
    </div>
  );
};
export default SubjectList;
