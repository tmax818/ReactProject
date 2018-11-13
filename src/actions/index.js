import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';
export const FETCH_CARDS = 'fetch-cards';
export const POST_TOPIC = 'post-topic';
export const DELETE_TOPIC = 'delete-topic';
export const POST_SUBJECT = 'post-subject';

const ROOT_URL = 'http://localhost:3001/api';

export const fetchTopics = () => {
  const req = axios.get(`${ROOT_URL}/topics`);
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

export const deleteTopic = (path, value) => {
  const req = axios.delete(`${ROOT_URL}${path}/${value}`, { title: value });
  return {
    type: DELETE_TOPIC,
    payload: req,
    value: value
  };
};

export const postSubject = (path, value) => {
  const req = axios.post(`${ROOT_URL}/${path}/subjects`, { title: value });
  return {
    type: POST_SUBJECT,
    payload: req
  };
};

export const fetchCards = path => {
  const req = axios.get(`${ROOT_URL}/${path}/cards`);
  return {
    type: FETCH_CARDS,
    payload: req
  };
};
