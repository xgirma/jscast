import React, {Component} from 'react';
import {HashRouter, NavLink} from 'react-router-dom';

import {defCollection} from '../utils/default';
import {typeCollection} from '../utils/type';
import Thumb from './Thumb';
import '../style/Collection-preview.css';
import {nextChannel, nextPod, previousPod} from "../actions";

class CollectionPreview extends Component {
  static propTypes = {
    collection: typeCollection,
  };
  
  static defaultProps = {
    collection: defCollection,
  };
  
  displayName = 'Collection';
  
  
  render() {
    const {collections, handlePrevious, handleNext} = this.props;
    const length = collections.length;
    const previousPod = collections[length - 1];
    const currentPod = collections[0];
    const nextPod = collections[1];
    const {
      title, link, description, image, author, copyright
    } = currentPod;
    const url = `/library/channel/${title}`;
    const authoredBy = title === author ? null : author;
    const detail = (
      <div>
        <p style={{fontWeight: 'bold'}}>{title || null}</p>
        <p style={{fontWeight: 'bold'}}>{authoredBy || null}</p>
        <p>{description || null}</p>
        <p>{link || null}</p>
        <p>{copyright || null}</p>
      </div>
    );
    
    return (
      <div className="Collection-preview-view">
        <div className="Collection-preview-view-nav">
          
          <div className="Collection-preview-previous"
               role="link"
               onClick={handlePrevious}
          >
            <Thumb image={previousPod.image} width="150" height="150"/>
          </div>
          
          <div className="Collection-preview-current">
            <HashRouter>
              <NavLink
                to={url}
                exact
              >
                <Thumb image={image} width="350" height="350"/>
              </NavLink>
            </HashRouter>
          </div>
          
          <div className="Collection-preview-next"
               role="link"
               onClick={handleNext}
          >
            <Thumb image={nextPod.image} width="150" height="150"/>
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
