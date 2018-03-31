import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TEN_RECENT, TEN_POPULAR } from '../utils/path';
import '../style/Toggle.css';

class Toggle extends Component {
  static propTypes = {
    recent: PropTypes.bool,
    library: PropTypes.bool,
    channel: PropTypes.bool,
    getPods: PropTypes.func,
    getPodsByChannel: PropTypes.func,
  };

  static defaultProps = {
    recent: true,
    library: false,
    channel: false,
    getPods: () => {},
    getPodsByChannel: () => {},
  };

  displayName = 'Toggle';

  handleHomeRecent = () => {
    const { getPods } = this.props;
    getPods(TEN_RECENT, true, false);
  };

  handleHomePopular = () => {
    const { getPods } = this.props;
    getPods(TEN_POPULAR, false, false);
  };

  handleChannelRecent = () => {
    const { channel, getPodsByChannel } = this.props;
    getPodsByChannel(TEN_RECENT, channel, true, true);
  };

  handleChannelPopular = () => {
    const { channel, getPodsByChannel } = this.props;
    getPodsByChannel(TEN_POPULAR, channel, false, true);
  };

  render() {
    const { recent, library } = this.props;

    const Switcher = () => {
      if (library) {
        if (recent) {
          return (
            <div>
              <span className="Toggle-active">&nbsp; RECENT &nbsp;</span>
              <span
                role="link"
                className="Toggle-inactive"
                onClick={this.handleChannelPopular}
              >&nbsp;  POPULAR &nbsp;
              </span>
            </div>
          );
        }
        return (
          <div>
            <span className="Toggle-active">&nbsp;  POPULAR &nbsp;</span>
            <span
              role="link"
              onClick={this.handleChannelRecent}
              className="Toggle-inactive"
            >&nbsp; RECENT &nbsp;
            </span>
          </div>
        );
      }

      if (recent) {
        return (
          <div>
            <span className="Toggle-active">&nbsp; RECENT &nbsp;</span>
            <span
              role="link"
              onClick={this.handleHomePopular}
              className="Toggle-inactive"
            >&nbsp;  POPULAR &nbsp;
            </span>
          </div>
        );
      }

      return (
        <div>
          <span className="Toggle-active">&nbsp;  POPULAR &nbsp;</span>
          <span
            role="link"
            onClick={this.handleHomeRecent}
            className="Toggle-inactive"
          >&nbsp; RECENT &nbsp;
          </span>
        </div>
      );
    };

    return (
      <div className="Toggle">
        <Switcher />
      </div>
    );
  }
}

export default Toggle;
