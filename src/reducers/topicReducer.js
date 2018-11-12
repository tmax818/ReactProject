import { FETCH_TOPICS, POST_TOPIC, DELETE_TOPIC } from '../actions';

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    case POST_TOPIC:
      return state.concat(action.payload.data);
    case DELETE_TOPIC:
      console.log(state, action);
      let newstate = state.filter(topic => {
        return topic.id !== action.value;
      });
      console.log(newstate);
      return newstate;
    default:
      return state;
  }
};

export default topicReducer;
