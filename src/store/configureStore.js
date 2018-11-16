import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

export default createStoreWithMiddleware;
