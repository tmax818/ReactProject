import { FETCH_TOPICS, POST_TOPIC, POST_SUBJECT } from '../actions';

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    case POST_TOPIC:
      return state.concat(action.payload.data);
    case POST_SUBJECT:
      console.log(state, action.payload.data);
      return state;
    default:
      return state;
  }
};

export default topicReducer;
