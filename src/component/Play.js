import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defPod} from "../utils/default";
import {typePod} from "../utils/type";
import '../style/Play.css';

class Play extends Component {
  static propTypes = {
    play: typePod,
    onSelect: PropTypes.func,
  };
  
  static defaultProps = {
    play: defPod,
    onSelect: () => {},
  };
  
  displayName = 'Play';
  
  state = {};
  
  handleSelect = () => {
    const {play, onSelect} = this.props;
    onSelect(play._id);
  };
  
  render() {
    const {published, episodeTitle} = this.props.play;
    return (
      <div className="container-Play"
        onClick={this.handleSelect}
      >
        {published} {episodeTitle}
      </div>
    )
  }
}

export default Play;