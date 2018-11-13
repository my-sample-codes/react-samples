import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './breadcumb.css';

class Breadcumb extends Component {

    render() {
        return (
            <Breadcrumb className="breadcumb">
                <Breadcrumb.Item>Mgmt-Console</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default Breadcumb;