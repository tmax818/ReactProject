import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';
export const POST_TOPIC = 'post-topic';
export const POST_SUBJECT = 'post-subject';

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

export const postSubject = (tid, value) => {
  const req = axios.post(`${ROOT_URL}/${tid}/subjects`, { title: value });
  return {
    type: POST_SUBJECT,
    payload: req
  };
};
