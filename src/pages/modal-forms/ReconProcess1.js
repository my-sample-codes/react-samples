import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio, Select, Progress, Spin, Icon } from 'antd';
import { Breadcrumb, Steps, Card, Row, Col } from 'antd';
import CompactTable from './../../components/table/CompactTable';
import './ReconProcess.less';
const Step = Steps.Step;
const Option = Select.Option;

const ReconProcess1 = Form.create()(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { visible: '' }

            this.columns1 = [
                {
                    title: "First Data",
                    dataIndex: "FirstData",
                    key: 'FirstData',

                },
                {
                    title: "",
                    dataIndex: "textinput1",
                    key: 'textinput1',

                },


                {
                    title: <div>
                        <Icon type="plus-circle" theme="filled" className="plusIcon" />
                    </div>,
                    dataIndex: 'Action',
                    key: 'Action',
                },

            ];
            this.columns2 = [
                {
                    title: "Samson Billing",
                    dataIndex: "FirstData",
                    key: 'FirstData',

                },
                {
                    title: "",
                    dataIndex: "textinput1",
                    key: 'textinput1',

                },


                {
                    title: <div>
                        <Icon type="plus-circle" theme="filled" className="plusIcon" />
                    </div>,
                    dataIndex: 'Action',
                    key: 'Action',
                },

            ];
            this.state = {
                dataSource1: [
                    {
                        FirstData:
                            <Select placeholder="Transaction Type" style={{ width: "150px" }}>
                                <Option value="Void">Void</Option>
                                <Option value="Refund">Refund</Option>
                                <Option value="Repeat">Repeat</Option>
                            </Select>

                        ,
                        textinput1:
                            <Input size="small" placeholder="Substring()" style={{ width: "100px" }} />

                        ,
                        Condition: 'Jim Green',
                        Billing: '1111',

                        Action: <div>
                            <center><Icon className="icons" type="delete" /></center>
                        </div>

                    },



                ],

                dataSource2: [
                    {
                        FirstData:
                            <Select placeholder="Record Type" style={{ width: "150px" }}>
                                <Option value="Void">Void</Option>
                                <Option value="Refund">Refund</Option>
                                <Option value="Repeat">Repeat</Option>
                            </Select>

                        ,
                        textinput1:
                            <Input size="small" placeholder="Substring()" style={{ width: "100px" }} />

                        ,
                        Condition: 'Jim Green',
                        Billing: '1111',
                        textinput2:
                            <Input size="small" placeholder="small size" />

                        ,
                        Action: <div>
                            <center><Icon className="icons" type="delete" /></center>
                        </div>

                    },

                ]
            }

        }

        render() {
            const { visible, onCancel, onOk } = this.props;


            return (
                <div>
                    <Modal
                        visible={visible}
                        title="Recon Function"
                        onOk={onOk}
                        okText="Next"
                        onCancel={onCancel}
                        className="customModal reconModals"
                    >

                        <Breadcrumb className="reconBreadcumb">
                            <Breadcrumb.Item className="processSteps">
                                <Steps size="small" current={0} progressDot>
                                    <Step title="Transaction Selection Criteria" />
                                    <Step title="Matching Rules" />

                                </Steps>
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <br />

                        <p className="formLabels">Transaction Selection Criteria :</p>
                        <Row>
                            <Col span={12}>
                                <Card>
                                    <CompactTable columns={this.columns1} dataSource={this.state.dataSource1} />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card className="transactionTable">
                                    <CompactTable columns={this.columns2} dataSource={this.state.dataSource2} />
                                </Card>
                            </Col>
                        </Row>
                    </Modal>
                </div>
            );
        }
    }
)

export default ReconProcess1;