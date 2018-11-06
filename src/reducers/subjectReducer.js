import { POST_SUBJECT, FETCH_SUBJECTS } from '../actions';

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case POST_SUBJECT:
      return state.concat(action.payload.data);
    case FETCH_SUBJECTS:
      console.log(action);
      return state.concat(action.payload.data);
      return state;
    default:
      return state;
  }
};
export default subjectReducer;
