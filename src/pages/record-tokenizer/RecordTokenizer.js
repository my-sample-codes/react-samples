import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb, Layout, Row, Col, Popover, Icon } from 'antd';
import './recordtokenizer.css';

import LayoutDefinition from './../layout-definition/LayoutDefinition';


const Step = Steps.Step;
const RadioGroup = Radio.Group;
var  hoverContent  =  require('./../infomapper.js').default;
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

    title: <div>
        <Icon type="plus-circle" theme="filled" className="plus-icon" />
    </div>,
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
    Action: <div>
        <Icon className="edit-delete" type="edit" theme="filled" />

        <Icon className="edit-delete" type="delete" theme="filled" />
    </div>
}, {
    key: '2',
    FieldName: 'FileName',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '64',
    EncodingType: 'ASCII',
    Action: <div>
        <Icon className="edit-delete" type="edit" theme="filled" />

        <Icon className="edit-delete" type="delete" theme="filled" />
    </div>
},
{
    key: '3',
    FieldName: 'NewrecType',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '2',
    EncodingType: 'ASCII',
    Action: <div>
        <Icon className="edit-delete" type="edit" theme="filled" />

        <Icon className="edit-delete" type="delete" theme="filled" />
    </div>
}];


export default class RecordTokenizer extends Component {

    state = {
        value: '',
        recordtype: 1,
        dlt:''
    }

    showRadio = (e) => { 
       
        console.log("Data::::",e);
        this.setState({ dlt:e}); 
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    chngRec(rec)
    {
        this.setState({recordtype:rec});
    }

    render() {

        const Option = Select.Option;
        var record='';
        // this.state.recordtype=record;
        function handleChange(value) {
            console.log(`selected ${value}`);
            // record=value;
            // console.log("Record::",record);
            // chngRec(record);
        }

        function handleIt() {
            record=this.state.value;
            console.log("record", record);
        }

        function handleBlur() {
            console.log('blur');
        }

        function handleFocus() {
            console.log('focus');
        }


        return (
            <div>
                <Breadcrumb className="breadcumb" style={{marginTop:'-1%',marginBottom:'2%'}}>
                <Breadcrumb.Item>
                <Steps size="small" current={2} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb> 
                <h2>Record Tokenizer</h2>
                <Card className="record-card">
                    <div>
                        <Row>
                            <Col span={3}>
                                <label className="extractor-details">Extractor Details :</label>
                            </Col>
                            <Col span={8}>


                                <Select
                                    showSearch
                                    className="slt-ret"
                                    placeholder="Record Extractor types"
                                    optionFilterProp="children"
                                    onChange={this.showRadio}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                 
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="delimited">Delimited record tokenizer</Option>
                                    <Option value="fixed">Fixed length record tokenizer</Option>

                                 
                                </Select>

                            </Col>
                            <Col span={8}>
                                <Popover placement="right" title="Datasets"
                                    content={hoverContent.maparray.RecordExtract}
                                    // <DatasetCard/>
                                    style={{ width: "50px" }}

                                >
                                    {/*  <Icon className="info-icon" type="question-circle" style={{marginLeft:"0px" , marginTop:"-5px"}} /> */}
                                </Popover>
                            </Col>
                        </Row>
                    </div>
                    <br />
                    {this.state.dlt === "delimited" ?
                
                     (
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                        <Radio value="line" className="radio">Line</Radio>
                        <Radio value="comma" className="radio">Comma</Radio>
                        <Radio value="colon" className="radio">Colon</Radio>
                        {/* <Radio value="others" className="radio" onChange={this.textappear}>Others</Radio> */}
                        <Radio value={4}>
                            Others
                                {this.state.value === 4 ? <Input placeholder="Enter Delimiter " style={{ width: 150, marginLeft: 10 }} /> : null}
                        </Radio>
                    </RadioGroup>
                    )
                    :
                    this.state.dlt === "fixed" ?
                    (
                    <div>Enter your Record Size:   
                        <Input placeholder="Enter Record Size " style={{ width: 150, marginLeft: 10 }}/>
                    </div>)
                    :(<div/>)
                }

                </Card>
                <br />
                <Card
                    title="Field Tokenization"
                    className="field-card"
                    extra={
                        <Popover placement="right" title="Datasets"
                            content={hoverContent.maparray.RecordExtract}
                        // <DatasetCard/>

                        >
                            <Icon className="info-icon" type="question-circle" style={{ marginRight: "820px", marginTop: "-8px" }} />
                        </Popover>

                    }
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
                        <Table size="small" columns={columns} dataSource={data} className="record-table" />
                    </div>
                </Card>

                <Link to="/LayoutDefinition">
                    <Button className="btn">Back</Button>
                </Link>
                <Link to="/TaskDesign">
                    <Button type='primary' className="btn">Next</Button>
                </Link>
                {/* <Button type='primary' className="btn">Complete Step</Button> */}
            </div>
        )
    }
}
