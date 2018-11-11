import React from 'react';

import Topic from './Topic';

const TopicList = ({ topics, match }) => {
  return topics.map((topic, index) => {
    return <Topic key={index} topic={topic} index={index} match={match} />;
  });
};
export default TopicList;
