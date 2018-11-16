import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb } from 'antd';
import './recordtokenizer.css';

const Step = Steps.Step;
const RadioGroup = Radio.Group;

const columns = [{
    title: 'Field Name',
    dataIndex: 'FieldName',
    key: 'FieldName',
}, {
    title: 'Data type',
    dataIndex: 'DataType',
    key: 'DataType',
}, {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
}, {
    title: 'Field Size',
    dataIndex: 'FieldSize',
    key: 'FieldSize',
}, {
    title: 'Encoding type',
    dataIndex: 'EncodingType',
    key: 'EncodingType',
}, {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action',
}];

const data = [{
    key: '1',
    FieldName: 'recType',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '2',
    EncodingType: 'ASCII',
    Action: 'Edit/Delete'
}, {
    key: '2',
    FieldName: 'FileName',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '64',
    EncodingType: 'ASCII',
    Action: 'Edit/Delete'
}];


export default class RecordTokenizer extends Component {

    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {

        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function handleBlur() {
            console.log('blur');
        }

        function handleFocus() {
            console.log('focus');
        }

        return (
            <div>
                <Breadcrumb className="breadcumb">
                    <Breadcrumb.Item>
                        <Steps size="small" current={2}>
                            <Step title="Source Definition" />
                            <Step title="Layout Definition" />
                            <Step title="Record Tokenizer" />
                            <Step title="Task Design" />
                        </Steps></Breadcrumb.Item>
                </Breadcrumb>
                <h2>Record Tokenizer</h2>
                <Card
                    title="Extractor Details"
                >
                    <div>
                        <Select
                            showSearch
                            className="slt-ret"
                            placeholder="Record Extractor types"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="delimited">Delimited record tokenizer</Option>
                            <Option value="fixed">Fixed length record tokenizer</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value="line" className="rdio">Line</Radio>
                            <Radio value="comma" className="rdio">Comma</Radio>
                            <Radio value="colon" className="rdio">Colon</Radio>
                            <Radio value="space" className="rdio">Blank Space</Radio>
                        </RadioGroup>
                    </div>
                </Card>

                <Card
                    title="Field Tokenization"
                >
                    <div>
                        <Select
                            showSearch
                            className="slt-ft"
                            placeholder="Section Detail types"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Header">Header</Option>
                        </Select>

                        <Select
                            showSearch
                            className="slt-ft"
                            placeholder="Record Tokenizer types"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="delimited">Delimited record tokenizer</Option>
                            <Option value="fixed">Fixed length record tokenizer</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Card>

                <Link to="/SourceDefinition">
                    <Button className="btn">Back</Button>
                </Link>
                <Link to="/RecordTokenizer">
                    <Button type='primary' className="btn">Next</Button>
                </Link>
                <Button type='primary' className="btn">Complete Step</Button>
            </div>
        )
    }
}
