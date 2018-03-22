import React, {Component} from 'react';
import FaFolder from 'react-icons/lib/fa/folder';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import {defCollection} from '../utils/default';
import {typeCollection} from '../utils/type';
import {HashRouter, NavLink} from 'react-router-dom';
import Thumb from './Thumb';
import '../style/Collection.css';

class Collection extends Component {
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
    const {collection} = this.props;
    const {
      title, link, description, image, author, copyright,
    } = collection;
    const url = `/library/channel/${title}`;
    const detail = (
      <div className="Collection-detail">
        <div className="detail-image">
          <Thumb image={image}/>
        </div>
        <div className="detail-text">
          <p style={{fontWeight: 'bold'}}>{author || null}</p>
          <p>{description || null}</p>
          <p>{link || null}</p>
          <p>{copyright || null}</p>
        </div>
      </div>
    );
    
    return (
      <div className="Collection">
        <div className="Collection-top">
          <div className="Collection-opener"
               role="link"
               onClick={this.handleClick}>
            {this.state.expand ? <FaFolderOpen/> : <FaFolder/>}
          </div>
          <div className="Collection-title">
            <HashRouter>
              <NavLink
                to={url}
                exact
                collection={collection}
              >
                {title}
              </NavLink>
            </HashRouter>
          </div>
        </div>
        <div>
          {this.state.expand ? detail : null}
        </div>
      </div>
    );
  }
}

export default Collection;
