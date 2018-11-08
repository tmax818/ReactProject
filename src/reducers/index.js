import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import subjectReducer from './subjectReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  topics: topicReducer,
  subjects: subjectReducer,
  cards: cardReducer
});

export default rootReducer;
