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
    const {image } = this.props;
    return (
      <div className="container-Thumb" id="myImg">
        {this.state.errored
          ? <img onError={this.handleError} src={require('./noLogo.png')} alt="Logo Not Found" width="200" height="200"/>
        :<img onError={this.handleError} src={image} alt={image} width="200" height="200"/>}
      </div>
    )
  }
}

export default Thumb;
