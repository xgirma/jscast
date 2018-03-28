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
  
  state = {
    errored: false,
  };
  
  handleError = () => {
    this.setState({
      errored: true
    });
  };
  
  render() {
    const {image, height, width } = this.props;
    return (
      <div className="container-Thumb" id="myImg">
        {this.state.errored
          ? <img onError={this.handleError} src={require('./noLogo.png')} alt="Logo Not Found" width={width} height={height}/>
        :<img onError={this.handleError} src={image} alt={image} width={width} height={height}/>}
      </div>
    )
  }
}

export default Thumb;
