import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class QualitySwitcher extends Component {
    constructor(props) {
        super(props);
        propTypes: {
            afterChange: React.PropTypes.func.isRequired
        }
        this.state = {
            quality: 'HQ'
        }
    }

    onChange(e) {
        this.setState({
            quality: e.currentTarget.value
        });
        this.props.afterChange(e.currentTarget.value);
    }

    render() {
        const rbStyle={
            width: '200px',
            display: 'inline-block' 
        }

        return (
            <RadioButtonGroup defaultSelected='HQ' onChange={this.onChange.bind(this) } name='quality'>
                <RadioButton value='HQ' label='High Quality' style={rbStyle} />
                <RadioButton value='LQ' label='Low Quality' style={rbStyle}/>
            </RadioButtonGroup>
        );
    }
}