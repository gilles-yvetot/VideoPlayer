import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class VideoParams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountId: 1818635,
            eventId: 4577843,
            videoId: 106713251,
            videoMode: 'vod'
        }
    }

    accountChange(e) {
        this.setState({ accountId: e.target.value });
    }
    eventChange(e) {
        this.setState({ eventId: e.target.value });
    }
    videoChange(e) {
        this.setState({ videoId: e.target.value });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            videoMode: newProps.videoMode
        });
    }

    render() {

        var extraIpt;
        if (this.state.videoMode === 'vod') {
            extraIpt =
                    <TextField
                        defaultValue={this.state.videoId}
                        floatingLabelText="Video ID"
                        floatingLabelFixed={true}
                        onChange={this.videoChange.bind(this) }
                    />
        }
        
        return (

            <div>
                    <TextField
                        defaultValue={this.state.accountId}
                        floatingLabelText="Account Name"
                        floatingLabelFixed={true}
                        onChange={this.accountChange.bind(this) }
                    />
                    <br/>
                    <TextField
                        defaultValue={this.state.eventId}
                        floatingLabelText="Event Name"
                        floatingLabelFixed={true}
                        onChange={this.eventChange.bind(this) }
                    />
                    <br/>                    
                    {extraIpt}
            </div>
        );
    }
}