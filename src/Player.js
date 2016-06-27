import React, {Component,PropTypes} from 'react';

export default class Player extends Component {
  
  static propTypes = {
    src: PropTypes.string.isRequired
  };
 constructor(props) {
    super(props);
 }
  getInitialState(){
    return {
      src: ''
    };
  }
  componentWillReceiveProps(){
    this.setState({
      src: this.props.src
    });
  }

  render() {
    return (
      <div>
        <video controls autoPlay webkitAllowFullScreen mozallowfullscreen allowFullScreen src={this.state.src}>
        </video>
      </div>
    );
  }
}