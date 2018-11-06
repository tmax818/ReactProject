import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ props }) => {
  return props.topics.map(topic => {
    return (
      <Link
        key={topic.id}
        to={{
          pathname: `/topics/${topic.id}`,
          state: { topic: topic }
        }}
        className="btn btn-primary"
      >
        {topic.title}
      </Link>
    );
  });
};
export default TopicList;
