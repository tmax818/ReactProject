import {
  FETCH_CARDS,
  FETCH_CARD,
  POST_CARD,
  DELETE_CARD,
  UPDATE_CARD
} from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return action.payload.data;
    case FETCH_CARD:
      return action.res;
    case POST_CARD:
      return state.concat(action.payload.data);
    case DELETE_CARD:
      let newState = state.filter(card => {
        return card.id !== action.value;
      });
      return newState;
    case UPDATE_CARD:
      return state;
    default:
      return state;
  }
};

export default cardReducer;
