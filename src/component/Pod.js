import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defPod } from '../utils/default';
import { typePod } from '../utils/type';
import '../style/Pod.css';

class Pod extends Component {
  static propTypes = {
    pod: typePod,
    onPodClick: PropTypes.func,
  };

  static defaultProps = {
    pod: defPod,
    onPodClick: () => {},
  };

  displayName = 'Pod';

  handlePodClick = () => {
    const { pod, onPodClick } = this.props;
    onPodClick(pod._id);
  };

  render() {
    const { pod } = this.props;
    return (
      <div className="Pod" role="link" onClick={this.handlePodClick}>
        <b>{pod.published}</b>: {pod.episodeTitle}
      </div>
    );
  }
}

export default Pod;
