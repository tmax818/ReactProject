import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic, index, match, handleDelete }) => {
  return (
    <div className="ui card">
      <Link
        key={index}
        to={{
          pathname: `${match.url}/${topic.id}`,
          state: { title: topic.title, subjects: topic.subjects }
        }}
        className="content"
      >
        {topic.title}
        <button className="btn btn-danger">Delete Topic</button>
      </Link>
    </div>
  );
};

export default Topic;
