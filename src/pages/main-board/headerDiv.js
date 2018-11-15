import React, { Component } from 'react';
import { Icon } from 'antd';

export default class headerDiv extends Component {

    render(){
        return(
            <div>
                <br/>
                <h2>Welcome to Optimus!</h2>
                <br/>
                <div>
                    <a>
                        <Icon type="bulb" />{' '}
                        Learn more
                    </a>
                    <a>
                        <Icon type="file-text" />{' '}
                        Documentation
                    </a>
                    <a>
                        <Icon type="solution" />{' '}
                        Support
                    </a>
                </div>
                <br/><br/>
            </div>
        )
    }
} 