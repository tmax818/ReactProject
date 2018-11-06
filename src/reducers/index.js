import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import subjectReducer from './subjectReducer';

const rootReducer = combineReducers({
  topics: topicReducer,
  subjects: subjectReducer
});

export default rootReducer;
