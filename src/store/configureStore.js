import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default createStoreWithMiddleware;
