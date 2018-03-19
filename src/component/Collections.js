import React from 'react';
import Channel from './Collection';
import { defCollections } from '../utils/default';
import { typeCollections } from '../utils/type';
import '../style/Collections.css';

const Collections = ({ collections }) => (
  <div className="Collections">
    <div className="Collections-bar">
      {""}
    </div>
    <div className="Collections-list">
      {collections.map(collection => (
        <Channel key={collection._id} collection={collection} />))}
    </div>
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
