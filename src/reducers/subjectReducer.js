import { POST_SUBJECT } from '../actions';

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case POST_SUBJECT:
      console.log(action.payload.data);
      return state.concat(action.payload.data);
    default:
      return state;
  }
};
export default subjectReducer;
