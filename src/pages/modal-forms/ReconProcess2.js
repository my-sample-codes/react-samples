import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio, Select, Progress, Spin, Icon } from 'antd';
import { Breadcrumb, Steps, Card, Row, Col } from 'antd';
import CompactTable from './../../components/table/CompactTable';
import './ReconProcess.less';
const Step = Steps.Step;
const Option = Select.Option;

const ReconProcess2 = Form.create()(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { visible: '' }

            this.columns = [
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
                    title: "Condition",
                    dataIndex: "Condition",
                    key: 'Condition',

                },
                {
                    title: "",
                    dataIndex: "Billing",
                    key: 'Billing'
                },
                {
                    title: "Samson Billing",
                    dataIndex: "textinput2",
                    key: 'textinput2'
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
                        FirstData: 'BAN',
                        textinput1:
                            <Input size="small" placeholder="substr(fd.ban,1,15)" />

                        ,
                        Condition: 'equals',
                        Billing: 'BAN',
                        textinput2:
                            <Input size="small" placeholder="concat(sb.ban,00)" />

                        ,
                        Action: <div>
                            <center><Icon className="icons" type="delete" /></center>
                        </div>

                    },

                    {
                        FirstData: 'Activity Date',
                        textinput1:
                            <Input size="small" placeholder="" />

                        ,
                        Condition: 'equals',
                        Billing: 'Activity Date',
                        textinput2:
                            <Input size="small" placeholder="" />

                        ,
                        Action: <div>
                            <center><Icon className="icons" type="delete" /></center>
                        </div>

                    },

                ],
                dataSource2: [
                    {
                        FirstData: 'Time',
                        textinput1:
                            <Input size="small" placeholder="" />

                        ,
                        Condition: '+/- 5mins',
                        Billing: 'Time',
                        textinput2:
                            <Input size="small" placeholder="" />

                        ,
                        Action: <div>
                            <center><Icon className="icons" type="delete" /></center>
                        </div>

                    },

                    {
                        FirstData: 'Amount',
                        textinput1:
                            <Input size="small" placeholder="sum(fd.amt)" />

                        ,
                        Condition: '+-/ 15%',
                        Billing: 'Amount',
                        textinput2:
                            <Input size="small" placeholder="sum(sb.amt)" />

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
                                <Steps size="small" current={1} progressDot>
                                    <Step title="Transaction Selection Criteria" />
                                    <Step title="Matching Rules" />
                                </Steps>
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <br />

                        <p>Priority :</p>
                        <Card>
                            <p>Priority 1:</p>
                            <CompactTable columns={this.columns} dataSource={this.state.dataSource1} />
                            <div className="tableOptions">
                                <a>Add Priority</a>
                                <a>Delete Priority</a>
                            </div>
                        </Card>
                        <br />

                        <Card>
                            <p>Priority 2:</p>
                            <CompactTable columns={this.columns} dataSource={this.state.dataSource2} />
                            <div className="tableOptions">
                                <a>Add Priority</a>
                                <a>Delete Priority</a>
                            </div>
                        </Card>
                    </Modal>
                </div>
            );
        }
    }
)

export default ReconProcess2;