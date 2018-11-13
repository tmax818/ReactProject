import { FETCH_CARDS, FETCH_TOPICS } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    // case FETCH_TOPICS:
    //   let subjects = action.payload.data.map(topic => {
    //     return topic.subjects;
    //   });
    //   let cards = subjects.map(subject => {
    //     return subject.map(sub => {
    //       return sub.cards;
    //     });
    //   });
    //   return state.concat(...cards);
    case FETCH_CARDS:
      return action.payload.data;
    default:
      return state;
  }
};

export default cardReducer;
