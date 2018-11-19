import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject, index, match, handleDelete }) => {
  return (
    <div>
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
        {subject.title}
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
  );
};

export default Subject;
