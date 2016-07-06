import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class Switch extends Component {
    constructor(props) {
        super(props);
        propTypes: {
            afterChange: React.PropTypes.func.isRequired
        }
        this.state = {
            videoMode: 'vod'
        }
    }

    onChange(e) {
        this.setState({
            videoMode: e.currentTarget.value
        });
        this.props.afterChange(e.currentTarget.value);
    }

    render() {
        return (
            <RadioButtonGroup defaultSelected='vod' onChange={this.onChange.bind(this) } name='videoMode'>
                <RadioButton value='vod' label='VoD' />
                <RadioButton value='live' label='Live' />
            </RadioButtonGroup>
        );
    }
}