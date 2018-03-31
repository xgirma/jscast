import React, {Component} from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  RedditIcon,
  TumblrIcon,
} from 'react-share';
import '../style/Social.css';

const url = 'https://xgirma.github.io/jscast/#/';
const title = 'JSCast: JavaScript Podcasts.';

class Social extends Component {
  static propTypes = {};
  
  static defaultProps = {};
  
  displayName = 'Social';
  
  state = {};
  
  render() {
    return (
      <div className="Social">
        <FacebookShareButton url={url} quote={title} className="Playing-facebook">
          <FacebookIcon size={23} round={false}/>
        </FacebookShareButton>
        
        <GooglePlusShareButton url={url} quote={title} className="Playing-google-plus">
          <GooglePlusIcon size={23} round={false}/>
        </GooglePlusShareButton>
        
        <TwitterShareButton url={url} quote={title} className="Playing-twitter">
          <TwitterIcon size={23} round={false}/>
        </TwitterShareButton>
        
        <RedditShareButton url={url} quote={title} className="Playing-reddit">
          <RedditIcon size={23} round={false}/>
        </RedditShareButton>
        
        <TumblrShareButton url={url} quote={title} className="Playing-tumblr">
          <TumblrIcon size={23} round={false}/>
        </TumblrShareButton>
      </div>
    )
  }
}

export default Social;
