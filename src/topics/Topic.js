import React from 'react';
import { Link } from 'react-router-dom';

const Topic = props => {
  const { topic, index, match } = props;
  return (
    <div className="card-group">
      <div className="card bg-light">
        <div className="card-body text-center">
          <h1>{topic.title}</h1>
          {topic.subjects.map((subject, index) => {
            return <li>{subject.title}</li>;
          })}
          <Link
            key={index}
            to={{
              pathname: `${match.url}/${topic.id}`,
              state: {
                title: topic.title,
                subjects: topic.subjects
              }
            }}
            className="btn btn-sm btn-primary"
          >
            Study
          </Link>
          <button className="btn btn-sm btn-danger">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
