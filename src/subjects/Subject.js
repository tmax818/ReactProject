import React from 'react';
import { Link } from 'react-router-dom';

const Subject = props => {
  const { subject, index, match, handleDelete } = props;
  console.log(handleDelete);
  return (
    <div className="card-group">
      <div className="card bg-light">
        <div className="card-body text-center">
          <h3>Cards for {subject.title}</h3>
          <p> {subject.cards.length} cards </p>
          <Link
            key={index}
            to={{
              pathname: `${match.url}/subjects/${subject.id}`,
              state: { cards: subject.cards, title: subject.title }
            }}
            className="btn btn-sm btn-primary"
          >
            Edit
          </Link>
          <button
            onClick={e => {
              return handleDelete(match.url, subject.id);
            }}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
