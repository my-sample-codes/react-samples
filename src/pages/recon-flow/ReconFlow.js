import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Button, Modal, Breadcrumb, Steps, Icon, Input, Card, Row, Col } from 'antd';
import Compacttable from './../../components/table/compacttable';
import Img from './../../assets/images/flowDig.png';
import './ReconFlow.css'

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
          <Icon type="plus-circle" theme="filled" className="plus-icon" />
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
          <Icon type="plus-circle" theme="filled" className="plus-icon" />
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
            <Icon type="plus-circle" theme="filled" className="plus-icon" />
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

          Action: <div><center>
            <Icon className="delete" type="delete" theme="filled" /></center>
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
          Action: <div><center>
            <Icon className="delete" type="delete" theme="filled" /></center>
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
                   <Icon  className="delete" type="delete" theme="filled" />
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
                     <Icon  className="delete" type="delete" theme="filled" />
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
                   <Icon  className="delete" type="delete" theme="filled" />
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
                     <Icon  className="delete" type="delete" theme="filled" />
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
              className="modal1"
            >

              <Breadcrumb className="breadcumb1">
                <Breadcrumb.Item>
                  <Steps size="small" current={0} progressDot>
                    <Step title="Transaction Selection Criteria" />
                    <Step title="Matching Rules" />

                  </Steps>
                </Breadcrumb.Item>
              </Breadcrumb>

              <br /><br />

              <p>Transaction Selection Criteria :</p>
              <Row>
                <Col span={12}>
                  <Card>
                    <Compacttable columns={this.columns} dataSource={this.state.dataSource} />
                  </Card>
                </Col>
                <Col span={12}>

                  <Card className="space">
                    <Compacttable columns={this.columns1} dataSource={this.state.dataSource1} />
                  </Card>
                </Col>
              </Row>
            </Modal>
          </div>
        ) :
          (<div><Modal
            className="modal1"
            title="Recon Function"
            visible={this.state.visible}
            onOk={this.handleModal}
            onCancel={this.handleCancel}
          >

            <Breadcrumb className="breadcumb1">
              <Breadcrumb.Item>
                <Steps size="small" current={1} progressDot>
                  <Step title="Transaction Selection Criteria" />
                  <Step title="Matching Rules" />

                </Steps>
              </Breadcrumb.Item>
            </Breadcrumb>

            <br /><br />

            <p>Priority :</p>
            <Card className="card1-table">
              <div className="link-style">
                <a style={{ marginRight: "15px" }}  >Add Priority</a>
                <a >Delete Priority</a>
              </div>
              <p className="priority">Priority 1:</p>
              <Compacttable className="margin-class" columns={this.columns2} dataSource={this.state.dataSource3} />
            </Card>
            <br />

            <Card className="card1-table">
              <div className="link-style">
                <a style={{ marginRight: "15px" }} >Add Priority</a>
                <a >Delete Priority</a>
              </div>
              <p className="priority">Priority 2:</p>
              <Compacttable className="margin-class" columns={this.columns2} dataSource={this.state.dataSource4} />
            </Card>

          </Modal></div>)}
      </div>
    )
  }
}
