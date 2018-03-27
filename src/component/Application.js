import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Library from './Library';
import NotFound from './NotFound';
import HomeContainer from '../containers/Home';
import ChannelContainer from '../containers/Channel';
import '../style/Application.css';

const Application = () => (
  <div className="App">
    <div className="App-header">
      <Header />
    </div>
    <div className="App-body">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/library" component={Library} />
          <Route
            exact
            path="/library/channel/:channel"
            render={props => <ChannelContainer {...props} />}
          />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  </div>
);

export default Application;
