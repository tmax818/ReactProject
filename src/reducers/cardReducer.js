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
      console.log(state, action);
      return action.res;
    case POST_CARD:
      return state.concat(action.payload.data);
    case DELETE_CARD:
      let newState = state.filter(card => {
        return card.id !== action.value;
      });
      return newState;
    case UPDATE_CARD:
      console.log(state, action);
      let upState = state.filter(card => {
        return card.id !== action.value.id;
      });
      return upState.concat(action.value);
    default:
      return state;
  }
};

export default cardReducer;
