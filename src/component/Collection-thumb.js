import React, { Component } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import { defCollection } from '../utils/default';
import { typeCollection } from '../utils/type';
import Thumb from './Thumb';
import '../style/Collection-thumbs.css';

class CollectionThumb extends Component {
  static propTypes = {
    collection: typeCollection,
  };

  static defaultProps = {
    collection: defCollection,
  };

  displayName = 'CollectionThumb';

  handleClick = () => {
    this.setState(prevState => ({ expand: !prevState.expand }));
  };

  render() {
    const { collection } = this.props;
    const { title, image } = collection;
    const url = `/library/channel/${title}`;
    return (
      <div className="Collection-thumb">
        <div className="Collection-thumb-single">
          <HashRouter>
            <NavLink
              to={url}
              exact
              collection={collection}
            >
              <Thumb image={image} width={200} height={200} />
            </NavLink>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default CollectionThumb;
