import React, { Component } from 'react';
import '../style/NotFound.css';

class NotFound extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'NotFound';

  state = {};

  render() {
    return (
      <div className="NotFound">
        {'not found'}
      </div>
    );
  }
}

export default NotFound;
