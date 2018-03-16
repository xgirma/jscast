import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Toggle.css';
import { TEN_RECENT, TEN_POPULAR } from '../utils/path';
import store from '../store';
import { getPods } from '../actions/playlist';

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

  // TODO get library name for below
  handleLibraryRecent = (channel) => {
    const url = `some const${channel}`;
    store.dispatch(getPods(url, true, true));
  };

  handleLibraryPopular = (channel) => {
    const url = `some const${channel}`;
    store.dispatch(getPods(url, false, true));
  };

  render() {
    const { recent, library } = this.props;

    return (
      <div className="container-Toggle">
        {library
          ? (recent
            ? <div>Popular Channel ...</div>
            : <div>Recent Channel ...</div>
          )
          : (recent
            ? <div role="link" onClick={this.handleHomePopular}>Get Popular</div>
            : <div role="link" onClick={this.handleHomeRecent}>Get Recent</div>
          )
        }
      </div>
    );
  }
}

export default Toggle;

/*
: possible list TODO remove
1. recent: true, library: false => Home page & recent pods
2. recent: false, library: false => Home page & popular pods
3. recent: true, library: true => Library page & recent
4. recent: false, library: true = Library page and popular
 */
