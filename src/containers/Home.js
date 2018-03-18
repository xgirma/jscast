import React, { Component } from 'react';
import store from '../store';
import Home from '../component/Home'
import { TEN_RECENT } from '../utils/path';
import { getPods } from '../actions';
import '../style/Channel.css';

class HomeContainer extends Component {
  
  displayName = 'Home';
  
  componentDidMount() {
    store.dispatch(getPods(TEN_RECENT, true, false));
  }
  
  render() {
    return <Home />;
  }
}

export default HomeContainer;
