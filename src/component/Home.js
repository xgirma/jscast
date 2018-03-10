import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Home.css';

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'Home';

  state = {};

  render() {
    return (
      <div className="Home">
        {'home'}
      </div>
    );
  }
}

export default Home;
