import React from 'react';
import { Link } from 'react-router-dom';

const SubjectList = ({ props }) => {
  console.log(props);
  let id = parseInt(props.match.params.id);
  let subjects = props.subjects.filter(subject => {
    return subject.topic_id === id;
  });
  console.log(subjects);
  return (
    <div>
      subjectlist
      <h3>{props.location.state.title}</h3>
      {subjects.map(subject => {
        return (
          <Link
            key={subject.id}
            to={{
              pathname: `${props.match.url}/subjects/${subject.id}`,
              state: { cards: subject.cards }
            }}
          >
            {subject.title}
          </Link>
        );
      })}
    </div>
  );
};
export default SubjectList;
