import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/playlist';
import initialState from './initial'; // initial state
import { getPods, getChannels } from '../actions/playlist';
import { TEN_RECENT } from '../utils/path';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.dispatch(getPods(TEN_RECENT, true, false));
store.dispatch(getChannels());

console.log(store.getState());

export default store;
