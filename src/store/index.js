import {applyMiddleware, compose, createStore} from 'redux';

import reducers from '../reducers/playlist';
import initialState from './initial'; // initial state

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);
