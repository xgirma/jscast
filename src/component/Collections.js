import React from 'react';
import Channel from './Collection';
import { defCollections } from '../utils/default';
import { typeCollections } from '../utils/type';
import '../style/Channels.css';

const Collections = ({ collections }) => (
  <div className="Collections">
    {collections.map(collection => (
      <Channel key={collection._id} collection={collection} />))}
  </div>
);

Collections.propTypes = {
  collections: typeCollections,
};

Collections.defaultProps = {
  collections: defCollections,
};

Collections.displayName = 'Collections';

export default Collections;
