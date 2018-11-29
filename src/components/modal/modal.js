import React, { Component } from 'react';
import { Select, Button, Modal, Breadcrumb, Steps, Icon, Input, Card, Row, Col  } from 'antd';
import Compacttable from './../../components/table/compacttable';
import './modal.css'
import {Link} from 'react-router-dom';
import NewModalComponent from './NewModalComponent';

const Step = Steps.Step;
const Option = Select.Option;

class ModalR extends Component {
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
            <Icon className="delete" type="delete" theme="filled" />
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
            <Icon className="delete" type="delete" theme="filled" />
          </div>

        },



      ],

    };


  }


  state = { visible: false }

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
    return (

      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Recon Function"
          visible={this.state.visible}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="modal1"
        >

          <Breadcrumb className="breadcumb">
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
         
         <Link to="NewModalComponent" >Next>></Link>


        </Modal>
      </div>
    );
  }
}

export default ModalR;