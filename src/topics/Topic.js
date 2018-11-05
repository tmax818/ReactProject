import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ location, match }) => {
  const { subjects } = location.state.topic;
  const { topic } = location.state;
  console.log(subjects, topic, match);
  return (
    <div>
      <h2>{location.state.topic.title}</h2>
      <ul>
        {subjects.map(subject => {
          return (
            <Link
              key={subject.id}
              to={{
                pathname: `${match.url}/subjects/${subject.id}`,
                state: { cards: subject.cards, subject: subject }
              }}
            >
              {subject.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default Topic;
