import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ props }) => {
  return props.topics.map(topic => {
    return (
      <Link
        key={topic.id}
        to={{
          pathname: `${props.match.url}/${topic.id}`,
          state: {
            title: topic.title,
            subjects: topic.subjects
          }
        }}
        className="btn btn-primary"
      >
        {topic.title}
      </Link>
    );
  });
};
export default TopicList;
