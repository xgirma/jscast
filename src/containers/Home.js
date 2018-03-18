import React, { Component } from 'react';
import Home from '../component/Home';
import store from '../store';
import { getPods } from '../actions';
import { TEN_RECENT } from '../utils/path';
import '../style/Channel.css';

class HomeContainer extends Component {
  displayName = 'HomeContainer';

  componentDidMount() {
    store.dispatch(getPods(TEN_RECENT, true, false));
  }

  render() {
    return <Home />;
  }
}

export default HomeContainer;
