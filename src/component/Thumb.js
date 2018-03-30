import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/Thumb.css';
const defImage = './noLogo.png';

class Thumb extends Component {
  static propTypes = {
    image: PropTypes.string,
  };
  
  static defaultProps = {
    image: defImage,
  };
  
  displayName = 'Thumb';
  
  render() {
    const {image, height, width } = this.props;
    return (
      <div className="container-Thumb" id="myImg">
        <img
          src={image}
          onError={(e)=>{e.target.src=require('./noLogo.png')}}
          width={width}
          height={height}
        />
      </div>
    )
  }
}

export default Thumb;
