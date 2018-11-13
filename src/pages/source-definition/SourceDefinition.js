import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Button,Steps,Breadcrumb} from 'antd';
import LayoutDefinition from './../layout-definition/LayoutDefinition';

export default class SourceDefinition extends Component {
    render() {
        return (
            <div>     
                 <br/><br/>
                    <center>
                        <Link to="/LayoutDefinition">
                            <Button type='primary'>Next-> Layout Definition </Button>
                        </Link>
                    </center>
               
            </div>

        )
    }
}
