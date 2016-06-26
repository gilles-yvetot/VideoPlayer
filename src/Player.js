import React, {Component,PropTypes} from 'react';

export default class Player extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };
  render() {
    const {src, ...htmlTags} = this.props;
    return (
      <div>
        <p>{src}</p>
        <video controls webkitAllowFullScreen mozallowfullscreen allowFullScreen {...htmlTags} src={src}></video>
      </div>
    );
  }
}