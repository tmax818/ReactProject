import { combineReducers } from 'redux';
import topicReducer from './topicReducer';

const rootReducer = combineReducers({
  topics: topicReducer
});

export default rootReducer;
