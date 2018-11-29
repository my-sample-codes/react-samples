import React, { Component } from 'react';
import {Button, Modal, Breadcrumb, Steps, Icon , Input, Card } from 'antd';
import Compacttable from './compacttable';
import {Link} from 'react-router-dom';


const Step = Steps.Step;


class NewModalComponent extends Component 
{
  constructor(props) {
    super(props);
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
            <Icon type="plus-circle" theme="filled" className="plus-icon" />
        </div>,
        dataIndex: 'Action',
        key: 'Action',
      },
     
    ];

    this.state = {
      dataSource: [
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
      dataSource1: [
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


    state = { visible: false }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }

    handleOk = (e) => {
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
    render()
    {
        return (

            <div>
                <Button type="primary" onClick={this.showModal}>
                Open Modal
                </Button>
                <Modal
                className = "modal1"
                title="Recon Function"
                visible={this.state.visible}
                // onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
               
                    <Breadcrumb className="breadcumb">
                        <Breadcrumb.Item>
                          <Steps size="small" current={1} progressDot>
                          <Step title="Transaction Selection Criteria" />
                          <Step title="Matching Rules" />
                        
                          </Steps>
                      </Breadcrumb.Item>
                    </Breadcrumb>

                    <br/><br/>

                    <p>Priority :</p>
                    <Card className="card1-table">
                        <div className="link-style">
                          <a style={{marginRight:"15px"}}  >Add Priority</a>
                          <a >Delete Priority</a>
                        </div>
                        <p className="priority">Priority 1:</p>
                        <Compacttable className="margin-class" columns={this.columns} dataSource={this.state.dataSource} />
                    </Card>
                    <br/>

                    <Card className="card1-table">
                        <div className="link-style">
                          <a style={{marginRight:"15px"}} >Add Priority</a>
                          <a >Delete Priority</a>
                        </div>
                          <p className="priority">Priority 2:</p>
                          <Compacttable className="margin-class" columns={this.columns} dataSource={this.state.dataSource1} />
                    </Card>
                    
                </Modal>
            </div>
        );
    }
}

export default NewModalComponent;