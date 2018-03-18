import React, { Component } from 'react';
import '../style/About.css';

class About extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'About';

  state = {};

  render() {
    return (
      <div className="About">
        {'about'}
      </div>
    );
  }
}

export default About;
