import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject, index, match, handleDelete }) => {
  return (
    <div className="ui equal width grid">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{subject.title}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <Link
                className="ui basic green button"
                key={index}
                to={{
                  pathname: `${match.url}/subjects/${subject.id}`,
                  state: { title: subject.title }
                }}
              >
                Study
              </Link>
              <div onClick={handleDelete} className="ui basic red button">
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
