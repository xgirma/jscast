import React, { Component } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import moment from 'moment';
import Thumb from './Thumb';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default';
import '../style/Footer.css';

class Footer extends Component {
  static propTypes = {
    playlist: typePlaylist,
  };

  static defaultProps = {
    playlist: defPlaylist,
  };

  displayName = 'Footer';

  render() {
    const { playlist } = this.props;
    const {
      title, episodeTitle, image, published,
    } = playlist[0];
    const date = moment(published).format('MMMM DD YYYY');
    const url = `/library/channel/${title}`;

    return (
      <div className="Footer">
        <div className="Footer-detail">
          <div className="Footer-title">
            <p>{episodeTitle}</p>
            <p>{date}</p>
          </div>
          <div className="Footer-channel">
            <HashRouter>
              <NavLink
                to={url}
                exact
              >
                <p>{title.toUpperCase()}</p>
              </NavLink>
            </HashRouter>
          </div>
        </div>
        <div className="Footer-image">
          <HashRouter>
            <NavLink
              to={url}
              exact
            >
              <Thumb image={image} width={200} height={200} />
            </NavLink>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default Footer;
