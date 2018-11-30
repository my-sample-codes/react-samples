import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb, Row, Col, Radio, Popover, Icon, Upload } from 'antd';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import SourceDefinition from './../source-definition/SourceDefinition';
import './layoutdefinition.css';

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
        val2:''
    }


    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    onChange2 = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            val2: e.target.value,
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
        const val2=this.state.val2;

        return (
            <div>
                <div>
                <Breadcrumb className="breadcumb" style={{marginTop:'-1%',marginBottom:'2%'}}>
                <Breadcrumb.Item>
                <Steps size="small" current={1} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb> 
                    <h2>Layout Definition</h2>
                    { !(val === 'yes')?( 
                    <div>
                        <h3>
                            Does the file have multiple data sections?  &nbsp;&nbsp;
                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                                <Radio value="yes" >Yes</Radio>
                                    <Radio value="no" >No</Radio>
                            </RadioGroup>

                            <Popover placement="right" title="Datasets"
                                content={hoverContent.maparray.question_info}
                            >
                                <Icon className="info-icon" type="question-circle" style={{ marginTop: "5px",cursor:'pointer' }} />
                            </Popover>

                        </h3> 
                    </div>):(<div></div>)}
                    <br />
                    { (val === 'no')?( 
                    <div>
                        <h3>
                            Does the your file have column header?  &nbsp;&nbsp;
                          <RadioGroup onChange={this.onChange2} value={this.state.val2}>
                                <Radio value="positive" >Yes</Radio>
                                    <Link to="/RecordTokenizer">
                                    <Radio value="negative" >No</Radio>
                                    </Link>
                            </RadioGroup>
                            
                            <Popover placement="right" title="Datasets"
                                content={hoverContent.maparray.question_info}
                            >
                                <Icon className="info-icon" type="question-circle" style={{ marginTop: "5px",cursor:'pointer' }} />
                            </Popover>

                        </h3> 
                    </div>):(<div></div>)}<br/>
                    { (val2 === 'positive')?( 
                    <div>
                         <Upload >
            <Button className="ant-btn btn ant-btn-primary" >Upload Sample file</Button>
          </Upload>
                       <Link to="/RecordTokenizer">
            <Button className="ant-btn btn ant-btn-primary" >Next</Button>
          </Link>
                    </div>):(<div></div>)}
                </div>

                {
                    val === 'yes' ? (
                        <div>
                            <Card className="char-encode-card" >
                                <div>
                                    <Row>
                                        <Col span={3}>
                                            <header className="CharacterEncoding">Character Encoding :</header>
                                        </Col>
                                        <Col span={10}>

                                            <Select
                                                showSearch
                                                className="selt-encode"
                                                placeholder="Character Encoding"
                                                optionFilterProp="children"
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                defaultValue="UTF-8"
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="utf8">UTF-8</Option>
                                                <Option value="utf16">UTF-16</Option>


                                            </Select>



                                        </Col>

                                        <br />
                                        <br />
                                        <label className="all-titles">File Layout :</label>
                                        <Popover placement="right" title="Datasets"
                                            content={hoverContent.maparray.file_layout}
                                        // <DatasetCard/>

                                        >
                                            <Icon className="info-icon" type="question-circle" style={{ marginTop: "5px" }} />
                                        </Popover>
                                        <div>
                                            <TextArea className='text-area' placeholder="Data(*)" autosize={{ minRows: 3, maxRows: 3 }} />
                                        </div>
                                        <div><br />
                                            <Button className='btn-apply'>Apply</Button>
                                        </div>
                                    </Row>


                                </div>

                            </Card>
                            <br />
                            <Card
                                title="Section Identification"
                                className="card-title"
                            >
                                <div>
                                    <Table size="small" columns={columns} dataSource={data} className="section-id-table ctable" />
                                </div>
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


