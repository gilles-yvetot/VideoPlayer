import React, { Component } from 'react';
import Video from './Video';
import VideoParams from './VideoParams';
import PlayBackSwitcher from './PlayBackSwitcher';
import QualitySwitcher from './QualitySwitcher';
import 'whatwg-fetch';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      progressive_url: '',
      progressive_url_hd: '',
      accountId: 1818635,
      eventId: 4577843,
      videoId: 106713251,
      playBackMode: 'vod',
      quality: 'HQ'
    };
    this.listPlaylist();
  }
  listPlaylist() {
    if (this.state.accountId && this.state.eventId && this.state.eventId) {
      let url = `http://api.new.livestream.com/accounts/${this.state.accountId}/events/${this.state.eventId}/videos/${this.state.videoId}`;
      this.getCall(url, (json) => {
        if (json.progressive_url) {
          this.setState({
            progressive_url: json.progressive_url,
            progressive_url_hd: json.progressive_url_hd,
            thumbnail: json.thumbnail_url
          });
          if (this.state.quality == 'HQ') {
            this.setState({
              src: this.state.progressive_url_hd
            })
          }
          else {
            this.setState({
              src: this.state.progressive_url
            })
          }
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

  onPlayBackChange(newPlayBackMode) {
    this.setState({
      playBackMode: newPlayBackMode
    });
  }
  onQualityChange(newQuality) {
    this.setState({
      quality: newQuality
    });
    if (newQuality == 'HQ') {
      this.setState({
        src: this.state.progressive_url_hd
      })
    }
    else {
      this.setState({
        src: this.state.progressive_url
      })
    }
  }

  render() {

    

    return (
      <MuiThemeProvider>
        <Paper zDepth={2} style={{
          display: 'inline-block',
        }}>
          <div style={{
            backgroundColor: 'rgb(232, 232, 232)',
            padding: '10px 24px',
            color: 'rgba(0, 0, 0, 0.4)',
            fontSize:20,
            textAlign:'left',
            marginBottom:10,
          }}>
            LiveStream Player
          </div>
          <PlayBackSwitcher afterChange={this.onPlayBackChange.bind(this) }/>
          <QualitySwitcher afterChange={this.onQualityChange.bind(this) }/>
          <Divider />
          <VideoParams afterEdit={this.listPlaylist.bind(this) } playBackMode={this.state.playBackMode}/>
          <Video src={this.state.src} poster={this.state.thumbnail}></Video>
        </Paper>
      </MuiThemeProvider>
    );
  }
}