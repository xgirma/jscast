import React, {Component} from 'react';
import MdViewList from 'react-icons/lib/md/view-list';
import MdViewWeek from 'react-icons/lib/md/view-week';
import MdViewModule from 'react-icons/lib/md/view-module';
import CollectionList from './Collection-list';
import CollectionThumb from './Collection-thumb';
import CollectionPreview from './Collection-preview';
import {defCollections} from '../utils/default';
import {typeCollections} from '../utils/type';
import '../style/Collections.css';

class Collections extends Component {
  static propTypes = {
    collections: typeCollections,
  };
  
  static defaultProps = {
    collections: defCollections,
  };
  
  displayName = 'Collections';
  
  state = {
    view: 'list'
  };
  
  handleList = () => {
    this.setState({view: 'list'});
  };
  
  handlePreview = () => {
    this.setState({view: 'preview'});
  };
  
  handleThumb = () => {
    this.setState({view: 'thumb'});
  };
  
  handlePrevious = () => {
    const {previousChannel} = this.props;
    previousChannel();
  };
  
  handleNext = () => {
    const {nextChannel} = this.props;
    nextChannel();
  };
  
  render() {
    const {collections} = this.props;
    const {view} = this.state;
    return (
      <div>
        <div className="Collections">
          <div className="Collections-bar">
            {""}
          </div>
          
          <div className="Collections-switches">
            <ul className="Collections-switches-ul">
              <li className="Collections-switches-li">
                <span className="Collections-list-btn"
                     role="link"
                     onClick={this.handleList}><MdViewList/>
                </span>
              </li>
              <li className="Collections-switches-li">
                <span className="Collections-preview-btn"
                     role="link"
                     onClick={this.handlePreview}><MdViewWeek/>
                </span>
              </li>
              <li className="Collections-switches-li">
                <span className="Collections-thumb-btn"
                     role="link"
                     onClick={this.handleThumb}><MdViewModule/>
                </span>
              </li>
            </ul>
          </div>
          
          <div className="Collections-view">
            <div className="Collections-list-view">
              {view === 'list' && collections.map(collection => (
                <CollectionList key={collection._id} collection={collection}/>
              ))}
            </div>
            <div className="Collections-preview-view">
              {view === 'preview' && <CollectionPreview
                collections={collections}
                handlePrevious={this.handlePrevious}
                handleNext={this.handleNext}
              />}
            </div>
            <div className="Collections-thumb-view">
              {view === 'thumb' && collections.map(collection => (
                <CollectionThumb key={collection._id} collection={collection}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collections;
