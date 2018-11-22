import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb, Row, Col,Radio } from 'antd';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import SourceDefinition from './../source-definition/SourceDefinition';
import './layoutdefinition.css';
import TaskDesign from './../taskDesign/taskDesign';

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
    Formula: 'sum()'
},];

export default class LayoutDefinition extends Component {
   
    state = {
        value:'',
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

        const val=this.state.value;
        return (
            <div>
                <div>
                <Breadcrumb className="breadcumb">
                    <Breadcrumb.Item>
                        <Steps size="small" current={1} progressDot>
                            <Step title="Source Definition" />
                            <Step title="Layout Definition" />
                            <Step title="Record Tokenizer" />
                            <Step title="Task Design" />
                        </Steps></Breadcrumb.Item>
                </Breadcrumb>

                <h2>Layout Definition</h2><br/><br/>

                <div>
                <h3>
                    Does the file have multiple data sections?  &nbsp;&nbsp;
                       <RadioGroup   onChange={this.onChange} value={this.state.value}>
                            <Radio value="yes" >Yes</Radio>
                            <Radio value="no" >No</Radio>
                        </RadioGroup>
                </h3>
                </div>
               </div>
               
                {
                    val==='yes'?(
                 <div>
                <Card className="char-encode-card" >
                    <div>
                        <Row>
                            <Col span={2}>
                                <header className="CharacterEncoding">Character Encoding</header>
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="utf8">UTF-8</Option>
                                    <Option value="utf16">UTF-16</Option>


                                </Select>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card
                    title="File Layout"
                // style={{ width: 300 }}
                >
                    <div>
                        <Input rows={4} value='Data(*)' />
                    </div>
                    <div><br />
                        <Button className='btn-apply'>Apply</Button>
                    </div>
                </Card>
                <br />
                <Card
                    title="Section Identification"
                // style={{ width: 300 }}
                >
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
             </div>
                ): val==='no'?(<div>  <Link to="/RecordTokenizer">
                <Button type='primary' className="btn">Next</Button>
                </Link></div>):(<div></div>)
            }
            </div>    
        )
    }
}


