import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Channel.css';

class Channel extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'Channel';

  state = {};

  render() {
    return (
      <div className="Channel">
        {'channel'}
      </div>
    );
  }
}

export default Channel;
