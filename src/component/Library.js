import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Library.css';

class Library extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'Library';

  state = {};

  render() {
    return (
      <div className="Library">
        {'library'}
      </div>
    );
  }
}

export default Library;
