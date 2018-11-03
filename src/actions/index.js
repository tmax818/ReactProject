import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';
export const POST_TOPIC = 'post-topic';

const ROOT_URL = 'http://localhost:3001/api/topics';

export const fetchTopics = () => {
  const req = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_TOPICS,
    payload: req
  };
};

export const postTopic = value => {
  const req = axios.post(`${ROOT_URL}`, { title: value });
  return {
    type: POST_TOPIC,
    payload: req
  };
};
