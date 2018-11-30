import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb, Row, Col, Radio, Popover, Icon } from 'antd';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import SourceDefinition from './../source-definition/SourceDefinition';
import './layoutdefinition.less';
import TaskDesign from './../taskDesign/taskDesign';
import Compacttable from "./../../components/table/compacttable"
var hoverContent = require('./../infomapper.js').default;

const { TextArea } = Input;


const RadioGroup = Radio.Group;
const Step = Steps.Step;
const columns = [{
    title: 'Section',
    dataIndex: 'Section',
    key: 'Section',
}, {
    title: 'Formula',
    dataIndex: 'Formula',
    key: 'Formula',
}];

const data = [{
    key: '1',
    Section: 'Data(*)',
    Formula: '-'
},];

export default class LayoutDefinition extends Component {

    state = {
        value: '',
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

        const val = this.state.value;
        return (
            <div>
                <div>
                <Breadcrumb className="breadcumb">
                <Breadcrumb.Item className="processSteps">
                <Steps size="small" current={1} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb> 
                    <h2>Layout Definition</h2>
                    { !(val === 'yes'|| val=='no')?( 
                    <div className="layoutContent">
                        <p>Does the file have multiple data sections?</p>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value="yes" className="radioBtn">Yes</Radio>
                            <Link to="/RecordTokenizer">
                                <Radio value="no" className="radioBtn">No</Radio>
                            </Link>
                        </RadioGroup>
                        <Popover placement="right" title="Datasets"
                                content={hoverContent.maparray.question_info}
                            >
                            <Icon className="icons" type="question-circle"/>
                        </Popover>
                    </div>):(<div></div>)}
                    <br />
                </div>

                {
                    val === 'yes' ? (
                        <div>
                            <Card className="cardStyle" >
                                <Row>
                                    <Col span={4}>
                                        <h3 className="subHeading3">Character Encoding :</h3>
                                    </Col>
                                    <Col span={10}>
                                        <Select
                                            showSearch
                                            className="selectElement"
                                            placeholder="Character Encoding"
                                            optionFilterProp="children"
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                        >
                                            <Option value="utf8">UTF-8</Option>
                                            <Option value="utf16">UTF-16</Option>
                                        </Select>
                                    </Col>
                                </Row><br />

                                <Row>
                                    <Col span={2}>
                                        <h3 className="subHeading3">File Layout :</h3>
                                    </Col>
                                    <Col span={10}>
                                        <Popover placement="right" title="Datasets"
                                            content={hoverContent.maparray.file_layout}>
                                            <Icon className="icons" type="question-circle" />
                                        </Popover>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TextArea placeholder="Data(*)" autosize={{ minRows: 3, maxRows: 3 }} />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='applyButton'>Apply</Button>
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            <Card
                                title="Section Identification"
                                className="cardStyle">
                                <Compacttable columns={columns} dataSource={data}/>                               
                            </Card>

                            <Link to="/SourceDefinition">
                                <Button className="btn">Back</Button>
                            </Link>
                            <Link to="/RecordTokenizer">
                                <Button type='primary' className="btn">Next</Button>
                            </Link>
                        </div>
                        // ): val==='no'?(<div>  <Link to="/RecordTokenizer">
                        // {/* <Button type='primary' className="btn">Next</Button> */}
                        // </Link></div>):(<div></div>)
                    ) :
                        val === 'no' ?
                            (

                                <Link to="/RecordTokenizer"></Link>

                            ) : (<div></div>)
                }
            </div>
        )
    }
}


