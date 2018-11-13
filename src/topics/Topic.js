import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic, index, match, handleDelete }) => {
  return (
    <div className="card-group">
      <div className="card bg-light">
        <div className="card-body text-center">
          <h1>{topic.title}</h1>
          {topic.subjects.map((subject, index) => {
            return (
              <li key={index}>
                {subject.title} {subject.cards.length} cards
              </li>
            );
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
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={e => {
              return handleDelete(match.url, topic.id, e);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
