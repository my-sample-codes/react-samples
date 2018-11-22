import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio, Select, Progress, Spin, Icon } from 'antd';
import './collection.css'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

class Progressing extends React.Component {
  render() {
    return (
      //Spinner 
      <div>
        <center><Spin size="large" tip="Processing ..." /></center>
      </div>
    );
  }
}

// Form Creation
const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, visible1, onCancel1, onCreate1, } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 9 },
        wrapperCol: { span: 14 },
      };

      return (
        <div>
          <Modal
            visible={visible}
            title="Create a new Project"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
            className="modal"
            >
            <Form layout="vertical">{/* Project Title */}
              <FormItem label="Project Name">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please enter Project Name!' }],
                })
                  (<Input />)}
              </FormItem>
              {/* Project Description */}
              <FormItem label="Description">
                {getFieldDecorator('description', {
                  rules: [{ required: true, message: 'Please enter Description!' }],
                })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
              {/* Document Type */}
              <FormItem {...formItemLayout} label="Select Document Type" hasFeedback>
                {getFieldDecorator('document_type', {
                  rules: [{ required: true, message: 'Please select Document Type!' }],
                })
                (
                  <div className="dropdown">
                  <Select placeholder="Select Document Type">
                    <Option value="csv">CSV</Option>
                    <Option value="xml">XML</Option>
                    <Option value="xls">XLS</Option>
                  </Select>
                  </div>
                )}
              </FormItem>
              {/* File header */}
              <FormItem className="collection-create-form_last-form-item" label="Does the file have headers ?" style={{display: 'flex', flexDirection: 'row', marginTop:"-25px", marginBottom:"0px"}}>
                {getFieldDecorator('headerSet', {
                  rules: [{ required: true, message: 'Please specify whether the file has Headers!' }],
                })(
                  <div className="radiodiv">
                  <Radio.Group>
                    <Radio value="yes" style={{marginLeft:"40px"}}>Yes</Radio>
                    <Radio value="no" style={{marginLeft:"10px"}}>No</Radio>
                  </Radio.Group>
                  </div>
                )}
              </FormItem>
            </Form>
          </Modal>
          {/* Modal for Spinner */}
          <Modal
            visible={visible1}
            closable={false}
            centered={true}
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
            bodyStyle={{ height: "100px" }}
          >
            <Progressing />
          </Modal>
        </div>
      );
    }
  }
);
export default CollectionCreateForm;
