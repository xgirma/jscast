import React, { Component } from 'react';
import { typeChannel } from '../utils/type';
import { defChannel } from '../utils/default';
import '../style/Channel.css';

class Channel extends Component {
  static propTypes = {
    channel: typeChannel,
  };

  static defaultProps = {
    channel: defChannel,
  };

  displayName = 'Channel';

  state = {};

  render() {
    const { channel } = this.props;
    return (
      <div className="Channel">
        {channel.title}
      </div>
    );
  }
}

export default Channel;
