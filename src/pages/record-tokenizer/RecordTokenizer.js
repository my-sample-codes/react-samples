import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb, Layout, Row, Col, Popover, Icon } from 'antd';
import './RecordTokenizer.less';

import LayoutDefinition from './../layout-definition/LayoutDefinition';
import TaskDesign from './../taskDesign/taskDesign';
import CompactTable from '../../components/table/CompactTable';

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
        <center><Icon type="plus-circle" theme="filled" className="plusIcon icons" /></center>
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
    Action: <div><center>
        <Icon className="icons" type="edit"/>

        <Icon className="icons" type="delete"/></center>
    </div>
}, {
    key: '2',
    FieldName: 'FileName',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '64',
    EncodingType: 'ASCII',
    Action: <div><center>
        <Icon className="icons" type="edit"/>

        <Icon className="icons" type="delete"/></center>
    </div>
},
{
    key: '3',
    FieldName: 'NewrecType',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '2',
    EncodingType: 'ASCII',
    Action: <div><center>
        <Icon className="icons" type="edit"/>

        <Icon className="icons" type="delete"/></center>
    </div>
}];


export default class RecordTokenizer extends Component {

    state = {
        value: '',
        recordtype:''
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    textappear = (e) => {
        console.log('helooooo');
        // return(<div>
        //     <input placeholder="jhuhgfjhg"></input>
        // </div>);

    }

 /*  
    onChange1 = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            recordtype: e.target.value,
        });
    }
 */

 chngRec(rec)
 {
     this.setState({recordtype:rec});
 }
    render() {

        const Option = Select.Option;
        var record='';
        this.state.recordtype=record;
        function handleChange(value) {
            console.log(`selected ${value}`);
         /*    console.log("Option::",Option); */
            record=value;
            console.log("Record::",record);
          /*   this.chngRec(record); */
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
                <Breadcrumb.Item className="processSteps">
                <Steps size="small" current={2} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb> 
                <h2>Record Tokenizer</h2>
                <Card className="cardStyle">
                    <div>
                        <Row>
                            <Col span={3}>
                                <label className="subHeading3">Extractor Details :</label>
                            </Col>
                            <Col span={8}>
                                <Select
                                    showSearch
                                    className="selectElement"
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

                            </Col>
                            <Col span={8}>
                                <Popover className="toolTips" placement="right" title="Datasets"
                                    content={hoverContent.maparray.RecordExtract}>
                                </Popover>
                            </Col>
                        </Row>
                    </div>
                    <br /><div>
                   
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value="line" className="radioBtn">Line</Radio>
                            <Radio value="comma" className="radioBtn">Comma</Radio>
                            <Radio value="colon" className="radioBtn">Colon</Radio>
                            {/* <Radio value="others" className="radio" onChange={this.textappear}>Others</Radio> */}
                            <Radio value={4} className="radioBtn">
                                Others
                                    {this.state.value === 4 ? <Input placeholder="Enter Delimiter" style={{ width: 150, marginLeft: 10 }} /> : null}
                            </Radio>
                        </RadioGroup>
                        
                        <Input placeholder="Enter Record Size " style={{ width: 150, marginLeft: 10 }}/>
                    
                    </div>
                </Card>
                <br />
                <Card
                    title="Field Tokenization"
                    className="styleCard"
                    extra={
                        <Popover placement="right" title="Datasets"
                            content={hoverContent.maparray.RecordExtract}>
                            <Icon className="icons" type="question-circle" style={{cursor:'pointer', marginRight: "820px", marginTop: "-8px" }} />
                        </Popover>

                    }
                >
                    <div>
                        <Select
                            showSearch
                            className="selectElement"
                            placeholder="Section Detail types"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Header">Data (*)</Option>
                        </Select>&nbsp;&nbsp;

                        <Select
                            showSearch
                            className="selectElement"
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
                        <CompactTable columns={columns} dataSource={data}/>
                    </div>
                </Card><br/>

                <Link to="/LayoutDefinition">
                    <Button>Back</Button>
                </Link>
                <Link to="/TaskDesign">
                    <Button type='primary' className="primaryBtn">Next</Button>
                </Link>
            </div>
        )
    }
}
