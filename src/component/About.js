import React, { Component } from 'react';
import '../style/About.css';

class About extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'About';

  render() {
    return (
      <div className="About">
        <div className="About-bar">
          {''}
        </div>
        {'coming soon ...'}
      </div>
    );
  }
}

export default About;
