import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class PlayBackSwitcher extends Component {
    constructor(props) {
        super(props);
        propTypes: {
            afterChange: React.PropTypes.func.isRequired
        }
        this.state = {
            playBackMode: 'vod'
        }
    }

    onChange(e) {
        this.setState({
            playBackMode: e.currentTarget.value
        });
        this.props.afterChange(e.currentTarget.value);
    }

    render() {
        const rbStyle={
            width: '200px',
            display: 'inline-block' 
        }

        return (
            <RadioButtonGroup defaultSelected='vod' onChange={this.onChange.bind(this) } name='playBackMode'>
                <RadioButton value='vod' label='VoD' style={rbStyle} />
                <RadioButton value='live' label='Live' style={rbStyle}/>
            </RadioButtonGroup>
        );
    }
}