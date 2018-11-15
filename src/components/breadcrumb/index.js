import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './breadcumb.css';
import { Steps } from 'antd';

const Step = Steps.Step;

class Breadcumb extends Component {

    render() {
        return (
            <Breadcrumb className="breadcumb">
                <Breadcrumb.Item>
                    <Steps size="small" current={1}>
                        <Step title="Source Definition" />
                        <Step title="Layout Definition" />
                        <Step title="Record Tokenizer" />
                        <Step title="Verify" />
                    </Steps></Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default Breadcumb;