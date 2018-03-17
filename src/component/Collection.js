import React, { Component } from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import FaFolder from 'react-icons/lib/fa/folder'
import FaFolderOpen from 'react-icons/lib/fa/folder-open'
import { typeCollection } from '../utils/type';
import { defCollection } from '../utils/default';
import '../style/Channel.css';

class Collection extends Component {
  static propTypes = {
    collection: typeCollection,
  };

  static defaultProps = {
    collection: defCollection,
  };

  displayName = 'Collection';

  state = {
    expand: false
  };
  
  handleClick = () => {
    this.setState((prevState) => {
      return {expand: !prevState.expand}
    });
  };

  render() {
    const { collection } = this.props;
    const { title, link, description, image, author, copyright } = collection;
    const url = `/library/channel/${title}`;
    const detail = (<div>
      <p>{author? author: null}</p>
      <p>{description? description: null}</p>
      <p>{link? link: null}</p>
      <p>{copyright? copyright: null}</p>
    </div>);
    
    return (
      <div className="Channel">
        <div className="item-opener" onClick={this.handleClick}>
          {this.state.expand? <FaFolderOpen/> : <FaFolder/>}
        </div>
        <div>
          <HashRouter>
            <NavLink
              to={url}
              exact={true}
              collection={collection}
            >
              {title}
            </NavLink>
          </HashRouter>
        </div>
        <div className="item-col-detail">
          {this.state.expand ? detail : null}
        </div>
      </div>
    );
  }
}

export default Collection;
