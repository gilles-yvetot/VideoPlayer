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
      url: '',
      url_hd: '',
      playBackMode: 'vod',
      quality: 'HQ'
    };
  }
  listPlaylist(accountId,eventId,videoId) {

    let url='';
    if (this.state.playBackMode == 'vod' && accountId && eventId && videoId ) {
      url = `http://api.new.livestream.com/accounts/${accountId}/events/${eventId}/videos/${videoId}`;
    }
    else if(this.state.playBackMode == 'live' && accountId && eventId){
      url = `http://api.new.livestream.com/accounts/${accountId}/events/${eventId}/stream_info`;
    }

    if(url){
      this.httpGet(url, (json) => {
        if (json.progressive_url || json.m3u8_url) {
          this.setState({
            url: json.progressive_url || json.m3u8_url,
            url_hd: json.progressive_url_hd,
            thumbnail: json.thumbnail_url
          });
          if (this.state.quality == 'LQ' || this.state.playBackMode == 'live') {
            this.setState({
              src: this.state.url
            })
          }
          else {
            this.setState({
              src: this.state.url_hd
            })
          }
        }
      },
        (err) => {
          console.error(err);
        })
    }
  }
  httpGet(url, success, error) {
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

    var qltSwtchr;
        if (this.state.playBackMode === 'vod') {
            qltSwtchr =
                    <QualitySwitcher afterChange={this.onQualityChange.bind(this) }/>
        }

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
          {qltSwtchr}
          <Divider />
          <VideoParams afterChange={this.listPlaylist.bind(this) } playBackMode={this.state.playBackMode}/>
          <Video src={this.state.src} poster={this.state.thumbnail}></Video>
        </Paper>
      </MuiThemeProvider>
    );
  }
}