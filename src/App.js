import React, { Component } from 'react';
import Player from './Player'
import 'whatwg-fetch'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      accountId: 1818635,
      eventId: 4577843,
      videoId: 106713251 
    };
    this.listPlaylist();
  }
  listPlaylist() {
    if (this.state.accountId && this.state.eventId && this.state.eventId) {
      let url = `http://api.new.livestream.com/accounts/${this.state.accountId}/events/${this.state.eventId}/videos/${this.state.videoId}`;
      this.getCall(url, (json) => {
        if(json.progressive_url){
          this.setState({
            src : json.progressive_url,
            thumbnail : json.thumbnail_url
          })
        }
      }, 
      (err) => {
        console.error(err);
      })
    }
  }
  getCall(url, success, error) {
      var self=this;
      
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(success)
      .catch(error)
  }

  accountChange(e) {
    this.setState({ accountId: e.target.value });
    this.listPlaylist();
  }
  eventChange(e) {
    this.setState({ eventId: e.target.value });
    this.listPlaylist();
  }
  videoChange(e) {
    this.setState({ videoId: e.target.value });
    this.listPlaylist();
  }

  render() {

    return (
      <div>
        <p>Enter an account name/id</p>
        <input type='text' placeholder='Channel name' value={this.state.accountId} onChange={this.accountChange.bind(this) } />
        <p>Enter an event name/id</p>
        <input type='text' placeholder='Event name' value={this.state.eventId} onChange={this.eventChange.bind(this) } />
        <p>Enter an video id</p>
        <input type='text' placeholder='Video Id' value={this.state.videoId} onChange={this.videoChange.bind(this) } />

        <Player src={this.state.src} poster={this.state.thumbnail}></Player>
      </div>
    );
  }
}