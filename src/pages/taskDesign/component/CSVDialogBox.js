import React from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import {store} from 'react-flow-diagram';
import './index.css';
import {Icon} from 'antd';
import cancel from './../../../assets/icons/cancel-btn.png';
import edit from './../../../assets/icons/edit.png';


const { Column, ColumnGroup } = Table;

const columns = [
  { title: 'Validation Name', dataIndex: 'fieldName', key: 'fieldName' },
  { title: 'Rule', dataIndex: 'rule', key: 'rule' },
  //{ title: 'Action', dataIndex: '', key: 'x', render: () => <div><img src={edit}/><img src={cancel}/></div>},
  { title: 'Action', dataIndex: '', key: 'x', render: () => <div> <Icon className="edit-delete" type="edit" theme="filled" /><Icon className="edit-delete" type="delete" theme="filled" /> </div>},
  
  //{title: <div><Icon type="plus-circle" theme="filled" className="plus-icon"/></div>,dataIndex: 'Action',key: 'Action'}
];
class CSVDialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      nameTextValue: '',
      entityData: [{}],
      //sectionDetailTypeText : '',
      dataFields : [{}],
    };
    this.updateDataFields = this.updateDataFields.bind(this);
  }

updateDataFields(){

  var configuredData = store.getState();
  console.log('Data' ,configuredData);
  this.state.dataFields = configuredData.entity[0].custom.dataFields;
  //this.state.sectionDetailTypeText = configuredData.entity[0].custom.sectionDetailType;
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
    this.props.getEntityData(this.state)
  }

  // handleOnChange = (e) => {
  //   this.setState({
  //     sectionDetailTypeText:  e.currentTarget.value,
  //   });
  //   console.log(this.state.sectionDetailTypeText);
  // }

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
        <Modal className = "ant-modal-header1"

          title="Data Validation Rules"
          visible={this.props.isOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
        >
         {/* <Input placeholder="Section Detail Types" value = {this.state.sectionDetailTypeText} onChange={this.handleOnChange} /> &nbsp;&nbsp;&nbsp; */}
          <Table  dataSource={this.state.dataFields} columns={columns} scroll={ {y: 1300} } pagination = {false}>
          </Table>
        </Modal>

      </div>
    )
  }
}

export default CSVDialogBox;