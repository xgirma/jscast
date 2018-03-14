import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/Pod.css';
import {typePod} from "../utils/type";
import {defPod} from "../utils/default";

class Pod extends Component {
  static propTypes = {
    playing: typePod,
    onPodClick: PropTypes.func.isRequired
  };
  
  static defaultProps = {
    playing: defPod,
    onPodClick: () => {},
  };
  
  displayName = 'Pod';
  
  handlePodClick = () => {
    const {pod, onPodClick} = this.props;
    onPodClick(pod._id);
  };
  
  render() {
    const {pod} = this.props;
    return (
      <div className="container-Pod" role="link" onClick={this.handlePodClick}>
          <b>{pod.published}</b>: {pod.title}
      </div>
    )
  }
}

export default Pod;