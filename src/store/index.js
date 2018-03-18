import thunk from 'redux-thunk';
import reducers from '../reducers/playlist';
import { applyMiddleware, compose, createStore } from 'redux';
import { getPods, getChannels } from '../actions';
import { TEN_RECENT } from '../utils/path';
import initialState from './initial'; // initial state

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

export default store;
