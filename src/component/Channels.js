import React, { Component } from 'react';
import Channel from './Channel';
import { typeChannels } from '../utils/type';
import { defChannels } from '../utils/default';
import '../style/Channels.css';

class Channels extends Component {
  static propTypes = {
    channels: typeChannels,
  };

  static defaultProps = {
    channels: defChannels,
  };

  displayName = 'Channels';

  render() {
    const { channels } = this.props;
    return (
      <div className="Library">
        {channels.map(channel => (
          <Channel key={channel._id} channel={channel} />))}
      </div>
    );
  }
}

export default Channels;
