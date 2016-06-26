import React, { Component } from 'react';
import Player from './Player'
import 'whatwg-fetch'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      account: 12795912,
      event: 4581408
    };
    this.listPlaylist();
  }
  listPlaylist() {
    if (this.state.account && this.state.event) {
      let url = 'http://api.new.livestream.com/accounts/' + this.state.account + '/events/' + this.state.event + '/stream_info';
      console.log(url)
      // calling API to retrieve playlist from a channel
      this.getCall(url, (json) => {
        console.log(json);
      }, (err) => {
        console.error(err);
      })
    }
  }
  getCall(url, success, error) {
    fetch('http://api.new.livestream.com/accounts/1818635/events/4577843/videos/106713251')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  channelAccount(e) {
    this.setState({ account: e.target.value });
    this.listPlaylist();
  }
  eventChange(e) {
    this.setState({ event: e.target.value });
    this.listPlaylist();
  }

  render() {

    return (
      <div>
        <p>Enter an account name/id</p>
        <input type='text' placeholder='Channel name' value={this.state.account} onChange={this.channelAccount.bind(this) } />
        <p>Enter an event name/id</p>
        <input type='text' placeholder='Event name' value={this.state.event} onChange={this.eventChange.bind(this) } />
        <Player src={this.state.src} width={500} height={270}></Player>
      </div>
    );
  }
}