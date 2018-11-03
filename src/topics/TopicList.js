import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ props }) => {
  console.log(props.match);
  return props.topics.map(topic => {
    return (
      <Link
        key={topic.id}
        to={{
          pathname: `/topics/${topic.id}`,
          state: { title: topic.title, topic_id: topic.id }
        }}
        className="btn btn-primary"
      >
        {topic.title}
      </Link>
    );
  });
};
export default TopicList;
