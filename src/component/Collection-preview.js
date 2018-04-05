import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, NavLink } from 'react-router-dom';
import { defCollections } from '../utils/default';
import { typeCollections } from '../utils/type';
import Thumb from './Thumb';
import '../style/Collection-preview.css';

class CollectionPreview extends Component {
  static propTypes = {
    collections: typeCollections,
    handlePrevious: PropTypes.func,
    handleNext: PropTypes.func,
  };

  static defaultProps = {
    collections: defCollections,
    handlePrevious: () => {},
    handleNext: () => {},
  };

  displayName = 'CollectionPreview';


  render() {
    const { collections, handlePrevious, handleNext } = this.props;
    const { length } = collections;
    const previousPod = collections[length - 1];
    const currentPod = collections[0];
    const nextPod = collections[1];
    const {
      title, link, description, image, author, copyright,
    } = currentPod;
    const url = `/library/channel/${title}`;
    const authoredBy = title === author ? null : author;
    const detail = (
      <div>
        <p style={{ fontWeight: 'bold' }}>{title || null}</p>
        <p style={{ fontWeight: 'bold' }}>{authoredBy || null}</p>
        <p>{description || null}</p>
        <p>{link || null}</p>
        <p>{copyright || null}</p>
      </div>
    );

    return (
      <div className="Collection-preview-view">
        <div className="Collection-preview-view-nav">

          <div
            className="Collection-preview-previous"
            role="link"
            onClick={handlePrevious}
          >
            <Thumb image={previousPod.image} width={50} height={50} />
          </div>

          <div className="Collection-preview-current">
            <HashRouter>
              <NavLink
                to={url}
                exact
              >
                <Thumb image={image} width={200} height={200} />
              </NavLink>
            </HashRouter>
          </div>

          <div
            className="Collection-preview-next"
            role="link"
            onClick={handleNext}
          >
            <Thumb image={nextPod.image} width={50} height={50} />
          </div>
        </div>

        <div className="Collection-preview-detail">
          {detail}
        </div>
      </div>
    );
  }
}

export default CollectionPreview;
