import { FETCH_TOPICS, POST_TOPIC } from '../actions';

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    case POST_TOPIC:
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default topicReducer;
