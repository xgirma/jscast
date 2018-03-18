import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { TEN_RECENT, TEN_POPULAR } from '../utils/path';
import { getPods, getPodsByChannel } from '../actions';
import '../style/Toggle.css';

class Toggle extends Component {
  static propTypes = {
    recent: PropTypes.bool,
    library: PropTypes.bool,
    getPods: PropTypes.func,
  };

  static defaultProps = {
    recent: true,
    library: false,
    getPods: () => {},
  };

  displayName = 'Toggle';

  state = {};

  handleHomeRecent = () => {
    store.dispatch(getPods(TEN_RECENT, true, false));
  };

  handleHomePopular = () => {
    store.dispatch(getPods(TEN_POPULAR, false, false));
  };

  handleChannelRecent = () => {
    const { channel } = this.props;
    store.dispatch(getPodsByChannel(TEN_RECENT, channel, true, true));
  };

  handleChannelPopular = () => {
    const { channel } = this.props;
    store.dispatch(getPodsByChannel(TEN_POPULAR, channel, false, true));
  };

  render() {
    const { recent, library } = this.props;

    const Switcher = () => {
      if (library) {
        if (recent) {
          return <div role="link" onClick={this.handleChannelPopular}>Get Popular</div>;
        }
        return <div role="link" onClick={this.handleChannelRecent}>Get Recent</div>;
      }
      if (recent) {
        return <div role="link" onClick={this.handleHomePopular}>Get Popular</div>;
      }
      return <div role="link" onClick={this.handleHomeRecent}>Get Recent</div>;
    };

    return (
      <div className="Toggle">
        <Switcher />
      </div>
    );
  }
}

export default Toggle;
