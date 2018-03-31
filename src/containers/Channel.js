import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import Channel from '../component/Channel';
import { TEN_RECENT } from '../utils/path';
import { getPodsByChannel } from '../actions';
import '../style/Channel.css';

class ChannelContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        channel: PropTypes.node,
      }).isRequired,
    }).isRequired,
  };

  displayName = 'ChannelContainer';

  constructor(props) {
    super(props);
    this.state = {
      channel: props.match.params.channel,
    };
  }

  componentDidMount() {
    const { channel } = this.state;
    store.dispatch(getPodsByChannel(TEN_RECENT, channel, true, true));
  }

  render() {
    return (
      <Channel />
    );
  }
}

export default ChannelContainer;
