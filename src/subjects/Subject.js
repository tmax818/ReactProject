import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject, index, match, handleDelete }) => {
  return (
    <div className="ui equal width grid">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{subject.title}</div>
            <div className="meta"> Subject(s)</div>
            <div className="description">Lorem ipsum dolor</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <Link
                className="ui basic green button"
                key={index}
                to={{
                  pathname: `${match.url}/subjects/${subject.id}`,
                  state: { cards: subject.cards, title: subject.title }
                }}
              >
                Study
              </Link>
              <div className="ui basic red button">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
