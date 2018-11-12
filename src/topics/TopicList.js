import React from 'react';

import Topic from './Topic';

const TopicList = ({ topics, match, handleDelete }) => {
  console.log(topics);
  return topics.map((topic, index) => {
    return (
      <Topic
        key={index}
        topic={topic}
        index={index}
        match={match}
        handleDelete={handleDelete}
      />
    );
  });
};
export default TopicList;
