import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';
export const POST_TOPIC = 'post-topic';
export const FETCH_SUBJECTS = 'fetch-subjects';
export const POST_SUBJECT = 'post-subject';

const ROOT_URL = 'http://localhost:3001/api/';

export const fetchTopics = () => {
  const req = axios.get(`${ROOT_URL}topics`);
  return {
    type: FETCH_TOPICS,
    payload: req
  };
};

export const postTopic = (path, value) => {
  const req = axios.post(`${ROOT_URL}${path}`, { title: value });
  return {
    type: POST_TOPIC,
    payload: req
  };
};

export const fetchSubjects = path => {
  const req = axios.get(`${ROOT_URL}${path}`);
  return {
    type: FETCH_SUBJECTS,
    payload: req
  };
};

export const postSubject = (path, value) => {
  const req = axios.post(`${ROOT_URL}/${path}/subjects`, { title: value });
  return {
    type: POST_SUBJECT,
    payload: req
  };
};
