import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
    const { pod, recent } = this.props;
    const published = moment(pod.published).format('MMM DD YY');
    return (
      <div className="Pod" role="link" onClick={this.handlePodClick}>
        <b>{published}</b>: {pod.episodeTitle} <b>{!recent && <span> : {pod.likes}</span>}</b>
      </div>
    );
  }
}

export default Pod;
