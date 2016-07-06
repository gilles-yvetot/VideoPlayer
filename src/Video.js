import React, {Component,PropTypes} from 'react';

export default class Player extends Component {
  
  static propTypes = {
    src: PropTypes.string.isRequired
  };
 constructor(props) {
    super(props);
    this.state={
      src : '',
      poster : ''
    }
 }

  componentWillReceiveProps(newProps){
    this.setState({
      src : newProps.src,
      poster : newProps.poster
    });
  }

  render() {
    return (
      <div>
        <video controls autoPlay allowFullScreen src={this.state.src} poster={this.state.poster}>
          Your browser does not support the video tag (HTML5). Download Google Chrome
        </video>
      </div>
    );
  }
}