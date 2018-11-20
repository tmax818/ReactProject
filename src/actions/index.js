import axios from 'axios';
export const FETCH_TOPICS = 'fetch-topics';
export const POST_TOPIC = 'post-topic';
export const DELETE_TOPIC = 'delete-topic';
export const DELETE_SUBJECT = 'delete-subject';
export const POST_SUBJECT = 'post-subject';
export const FETCH_SUBJECTS = 'fetch-subjects';
export const FETCH_CARDS = 'fetch-cards';
export const FETCH_CARD = 'fetch-card';
export const POST_CARD = 'post-card';
export const DELETE_CARD = 'delete-card';
export const UPDATE_CARD = 'update-card';

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
  console.log(path, value);
  const req = axios.delete(`${ROOT_URL}${path}/${value}`, { title: value });
  return {
    type: DELETE_TOPIC,
    payload: req,
    value: value
  };
};

export const fetchSubjects = () => {
  return {
    type: FETCH_SUBJECTS
  };
};

export const deleteSubject = (path, subject) => {
  const req = axios.delete(`${ROOT_URL}${path}/subjects/${subject}`, {
    title: subject
  });
  return {
    type: DELETE_SUBJECT,
    payload: req,
    value: subject
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

export const fetchCard = (path, value) => {
  return dispatch => {
    dispatch({ type: 'SOMETHING' });
    return fetch(`${ROOT_URL}${path}/cards/${value}`)
      .then(res => res.json())
      .then(res => dispatch({ type: FETCH_CARD, res }));
  };
};

export const fetchCats = () => {
  return dispatch => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('http://www.catapi.com')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'ADD_CATS', cats }));
  };
};

export const postCard = (path, value) => {
  const req = axios.post(`${ROOT_URL}${path}/cards`, { card: value });
  return {
    type: POST_CARD,
    payload: req
  };
};

export const deleteCard = (path, value) => {
  const req = axios.delete(`${ROOT_URL}${path}/cards/${value}`, {
    card: value
  });
  return {
    type: DELETE_CARD,
    payload: req,
    value: value
  };
};

export const updateCard = (path, value) => {
  console.log(path, value);
  const req = axios.put(`${ROOT_URL}${path}/cards/${value.id}`, {
    card: value
  });
  return {
    type: UPDATE_CARD,
    payload: req,
    value: value
  };
};
