import React from 'react';
import { Modal } from 'antd';
//import 'antd/es/modal/style/index.css';
//import 'antd/lib/table/style/index.css';
import { Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import {store} from 'react-flow-diagram';
import './index.css';
import cancel from '../../images/cancel-btn.png';
import edit from '../../images/edit.png';


const { Column, ColumnGroup } = Table;

const columns = [
  { title: 'Validation Name', dataIndex: 'fieldName', key: 'fieldName' },
  { title: 'Rule', dataIndex: 'rule', key: 'rule' },
  { title: 'Action', dataIndex: '', key: 'x', render: () => <div><img src={edit}/><img src={cancel}/></div>},
];
class CSVDialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      nameTextValue: '',
      entityData: [{}],
      sectionDetailTypeText : '',
      dataFields : [{}],
    };
    this.updateDataFields = this.updateDataFields.bind(this);
  }

updateDataFields(){

  var configuredData = store.getState();
  console.log('Data' ,configuredData);
  this.state.dataFields = configuredData.entity[0].custom.dataFields;
  //this.state.sectionDetailTypeText = configuredData.entity[0].custom.sectionDetailTypeText;
}

  showModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  handleOk = (e) => {
    this.props.dialogBoxStateChange();
    this.setState({
      isOpen: false,
    });
    console.log('State',this.state.sectionDetailTypeText);
    this.props.getEntityData(this.state)
  }

  handleOnChange = (e) => {
    this.setState({
      sectionDetailTypeText:  e.currentTarget.value,
    });
   // this.state.sectionDetailTypeText = e.currentTarget.value;
    console.log(this.state.sectionDetailTypeText);
  }

  handleCancel = (e) => {

    this.props.dialogBoxStateChange();
    this.setState({
      isOpen: false,
    });

  }
  render() {
    this.updateDataFields();
    return (
      <div>
        <Modal

          title="Data Validation Rules"
          visible={this.props.isOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
        >
         <Input placeholder="Section Detail Types"  onChange={this.handleOnChange} /> &nbsp;&nbsp;&nbsp;
          <Table dataSource={this.state.dataFields} columns={columns}>
           
            {/* <Column
              title="Validation Name"
              dataIndex="fieldName"
              key="fieldName"
            />
             <Column
              title="Rule"
              dataIndex="rule"
              key="rule"
            />
            <Column
              title = 'Action'
              dataIndex = ''
              key = 'x'
              render = () => <a href="javascript:;">Delete</a> 
            />
             <Column
              title=""
              dataIndex=""
              key=""
            /> */}
            
          </Table>
        </Modal>

      </div>
    )
  }
}

export default CSVDialogBox;