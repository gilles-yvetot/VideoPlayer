import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class VideoParams extends Component {
    constructor(props) {
        super(props);
        propTypes: {
            afterChange: React.PropTypes.func.isRequired
        }
        this.state = {
            accountId: 1818635,
            eventId: 4577843,
            videoId: 106713251,
            playBackMode: 'vod'
        }
    }
    componentDidMount(){
        this.props.afterChange(this.state.accountId,this.state.eventId, this.state.videoId);        
    }

    accountChange(e) {
        this.setState({ accountId: e.target.value });
        this.props.afterChange(e.target.value,this.state.eventId, this.state.videoId);        
    }
    eventChange(e) {
        this.setState({ eventId: e.target.value });
        this.props.afterChange(this.state.accountId,e.target.value, this.state.videoId);
    }
    videoChange(e) {
        this.setState({ videoId: e.target.value });
        this.props.afterChange(this.state.accountId,this.state.eventId, e.target.value);        
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            playBackMode: newProps.playBackMode
        });
    }

    render() {
       
        var extraIpt;
        if (this.state.playBackMode === 'vod') {
            extraIpt =
                    <TextField
                        defaultValue={this.state.videoId}
                        floatingLabelText="Video ID"
                        floatingLabelFixed={true}
                        onChange={this.videoChange.bind(this) }
                    />
        }
        
        return (

            <div style={{
                paddingRight: 15,
                paddingLeft: 15}}
            >
                    <TextField
                        defaultValue={this.state.accountId}
                        floatingLabelText="Account Name"
                        floatingLabelFixed={true}
                        onChange={this.accountChange.bind(this) }
                    />
                    <TextField
                        defaultValue={this.state.eventId}
                        floatingLabelText="Event Name"
                        floatingLabelFixed={true}
                        onChange={this.eventChange.bind(this) }
                    />
                    {extraIpt}
            </div>
        );
    }
}