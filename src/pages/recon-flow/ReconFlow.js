import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Button, Modal, Breadcrumb, Steps, Icon, Input, Card, Row, Col } from 'antd';
import CompactTable from './../../components/table/CompactTable';
import Img from './../../assets/images/flowDig.png';
import './ReconFlow.less'

const Step = Steps.Step;
const Option = Select.Option;

export default class ReconFlow extends Component {
  constructor(props) {
    super(props);

    this.state = { visible:'' }

    this.handleOk = this.handleOk.bind(this);

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
        title: <div>
          <Icon type="plus-circle" theme="filled" className="plusIcon" />
        </div>,
        dataIndex: 'Action',
        key: 'Action',
      },

    ];

    this.columns1 = [
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

    this.columns2 = [
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
      dataSource: [
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
            <center><Icon className="icons" type="delete"/></center>
          </div>

        },



      ],

      dataSource1: [
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
            <center><Icon className="icons" type="delete"/></center>
          </div>

        },

      ],
      dataSource3: [
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
                   <center><Icon  className="icons" type="delete"/></center>
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
                     <center><Icon  className="icons" type="delete"/></center>
                    </div>
            
          },
              
      ],
      dataSource4: [
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
                   <center><Icon  className="icons" type="delete"/></center>
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
                     <center><Icon  className="icons" type="delete"/></center>
                    </div>
            
          },
              
      ]

    };


  }



  showModal1 = () => {
    this.setState({
      visible: true,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log("HaNDLE okkk:::",e);
    this.setState({
      visible: "two",
    });
  }

  handleModal = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {

    const modalview = this.state.visible;

    return (
      <div>
        <img className='taskDesign' src={Img} />
        <div className="clickableDiv" onClick={this.showModal}></div>

        {!(modalview === "two") ? (
          <div>
            <Modal
              title="Recon Function"
              visible={this.state.visible}
              onOk={this.handleOk}
              okText="Next"
              onCancel={this.handleCancel}
              className="reconFunctionModal"
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
                    <CompactTable columns={this.columns} dataSource={this.state.dataSource} />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="transactionTable">
                    <CompactTable columns={this.columns1} dataSource={this.state.dataSource1} />
                  </Card>
                </Col>
              </Row>
            </Modal>
          </div>
        ) :
          (<div><Modal
            className="reconFunctionModal"
            title="Recon Function"
            visible={this.state.visible}
            onOk={this.handleModal}
            onCancel={this.handleCancel}
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
              <CompactTable columns={this.columns2} dataSource={this.state.dataSource3} />
              
              <div className="tableOptions">
                <a>Add Priority</a>
                <a>Delete Priority</a>
              </div>
            </Card>
            <br />

            <Card>
              <p>Priority 2:</p>
              <CompactTable columns={this.columns2} dataSource={this.state.dataSource4} />
              <div className="tableOptions">
                <a>Add Priority</a>
                <a>Delete Priority</a>
              </div>
            </Card>

          </Modal></div>)}
      </div>
    )
  }
}
