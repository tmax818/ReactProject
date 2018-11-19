import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic, index, match, handleDelete }) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{topic.title}</div>
          <div className="meta">{topic.subjects.length} Subject(s)</div>
          <div className="description">Lorem ipsum dolor</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <Link
              className="ui basic green button"
              key={index}
              to={{
                pathname: `${match.url}/${topic.id}`,
                state: { title: topic.title, subjects: topic.subjects }
              }}
            >
              View
            </Link>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
