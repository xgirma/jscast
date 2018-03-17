import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import ChannelContainer from '../containers/Channel';
import Header from './Header';
import HomeContainer from '../containers/Home';
import Library from './Library';
import NotFound from './NotFound';
import '../style/Application.css';

class Application extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/library/channel/:channel" render={props => <ChannelContainer {...props} />} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default Application;
