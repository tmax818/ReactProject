import { SHOW_CARD, FETCH_TOPICS } from '../actions';

const cardReducer = (state = [{ show: false }], action) => {
  switch (action.type) {
    case SHOW_CARD:
      return Object.assign({}, { show: action.payload });
    case FETCH_TOPICS:
      let subjects = action.payload.data.map(topic => {
        return topic.subjects;
      });
      let cards = subjects.map(subject => {
        return subject.map(sub => {
          return sub.cards;
        });
      });
      console.log(cards);
      return state.concat(...cards);
    default:
      return state;
  }
};

export default cardReducer;
