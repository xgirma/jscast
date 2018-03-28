import React, {Component} from 'react';
import {HashRouter, NavLink} from 'react-router-dom';
import FaFolder from 'react-icons/lib/fa/folder';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import {defCollection} from '../utils/default';
import {typeCollection} from '../utils/type';
import Thumb from './Thumb';
import '../style/Collection-preview.css';
import {nextPod, previousPod} from "../actions";

class CollectionPreview extends Component {
  static propTypes = {
    collection: typeCollection,
  };
  
  static defaultProps = {
    collection: defCollection,
  };
  
  displayName = 'Collection';
  
  state = {
    expand: false,
  };
  
  handleClick = () => {
    this.setState(prevState => ({expand: !prevState.expand}));
  };
  
  render() {
    const {collections} = this.props;
    const length = collections.length;
    const previousPod = collections[length - 1];
    const currentPod = collections[0];
    const nextPod = collections[1];
    const {
      title, link, description, image, author, copyright
    } = currentPod;
    const url = `/library/channel/${title}`;
    const detail = (
      <div>
        <p style={{fontWeight: 'bold'}}>{title || null}</p>
        <p style={{fontWeight: 'bold'}}>{author || null}</p>
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
               onClick={previousPod}
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
               onClick={nextPod}
          >
            <Thumb image={nextPod.image} width="150" height="150"/>
          </div>
        </div>
        
        <div className="Collection-preview-detail">
          {detail}
        </div>
        <div style={{color:'red', fontWeight:'bold', textAlign:'center'}}>Under constructor !!! Under constructor !!! Under constructor !!! Under constructor !!!</div>
      </div>
    );
  }
}

export default CollectionPreview;
