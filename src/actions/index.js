import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';

const ROOT_URL = 'http://localhost:3001/api/topics';

export const fetchTopics = () => {
  const req = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_TOPICS,
    payload: req
  };
};
