import { FETCH_TOPICS } from '../actions';

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default topicReducer;
