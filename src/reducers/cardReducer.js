import { SHOW_CARD } from '../actions';

const cardReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW_CARD:
      console.log(state, action);
      return Object.assign({}, { show: action.payload });
    default:
      return state;
  }
};

export default cardReducer;
