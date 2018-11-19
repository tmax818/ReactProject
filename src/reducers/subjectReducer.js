import {
  POST_SUBJECT,
  FETCH_TOPICS,
  DELETE_SUBJECT,
  FETCH_SUBJECTS
} from '../actions';

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case POST_SUBJECT:
      return state.concat(action.payload.data);
    case FETCH_TOPICS:
      let subjects = action.payload.data.map(topic => {
        return topic.subjects;
      });
      return state.concat(...subjects);
    case DELETE_SUBJECT:
      let newState = state.filter(subject => {
        return subject.id !== action.value;
      });
      return newState;
    case FETCH_SUBJECTS:
      return state;
    default:
      return state;
  }
};
export default subjectReducer;
