import React from 'react';
import { Link } from 'react-router-dom';

const SubjectList = ({ props }) => {
  console.log(props.subjects);
  return (
    <div>
      <p>sub list</p>
      {props.subjects.map(subject => {
        return (
          <Link
            key={subject.id}
            to={{
              pathname: `${props.match.url}/subjects/${subject.id}`,
              state: { cards: subject.cards, title: subject.title }
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
