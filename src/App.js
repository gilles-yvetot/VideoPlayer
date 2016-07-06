import React, { Component } from 'react';
import Video from './Video'
import VideoParams from './VideoParams'
import Switch from './Switch'
import 'whatwg-fetch'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      accountId: 1818635,
      eventId: 4577843,
      videoId: 106713251,
      videoMode: 'vod'
    };
    this.listPlaylist();
  }
  listPlaylist() {
    if (this.state.accountId && this.state.eventId && this.state.eventId) {
      let url = `http://api.new.livestream.com/accounts/${this.state.accountId}/events/${this.state.eventId}/videos/${this.state.videoId}`;
      this.getCall(url, (json) => {
        if (json.progressive_url) {
          this.setState({
            src: json.progressive_url,
            thumbnail: json.thumbnail_url
          })
        }
      },
        (err) => {
          console.error(err);
        })
    }
  }
  getCall(url, success, error) {
    var self = this;

    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(success)
      .catch(error)
  }

  onSwitchChange(newVideoMode) {
    this.setState({
      videoMode: newVideoMode
    });
  }

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <Switch afterChange={this.onSwitchChange.bind(this) }></Switch>
          <VideoParams afterEdit={this.listPlaylist.bind(this) } videoMode={this.state.videoMode}></VideoParams>
          <Video src={this.state.src} poster={this.state.thumbnail}></Video>
        </div>
      </MuiThemeProvider>
    );
  }
}