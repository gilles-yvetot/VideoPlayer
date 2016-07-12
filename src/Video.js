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
    var type=null;
    if(this.state.src && this.state.src.indexOf('.m3u8')>-1){
      type = 'application/x-mpegURL';
    }
    else if(this.state.src && this.state.src.indexOf('.mp4')>-1){
      type = 'video/mp4';
    }
    return (
      <div style={{paddingRight: 15,
                paddingLeft: 15}}>
        <video controls autoPlay allowFullScreen poster={this.state.poster} preload='metadata'>
          <source src={this.state.src} type={type} />
          Your browser does not support the video tag (HTML5). Download Google Chrome
        </video>
      </div>
    );
  }
}