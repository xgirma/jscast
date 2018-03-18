import React, { Component } from 'react';
import Channel from './Collection';
import { typeCollections } from '../utils/type';
import { defCollections } from '../utils/default';
import '../style/Channels.css';

class Collections extends Component {
  static propTypes = {
    collections: typeCollections,
  };

  static defaultProps = {
    collections: defCollections,
  };

  displayName = 'Collections';

  render() {
    const { collections } = this.props;
    return (
      <div className="Collections">
        {collections.map(collection => (
          <Channel key={collection._id} collection={collection} />))}
      </div>
    );
  }
}

export default Collections;
