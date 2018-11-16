import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio, Select, Progress, Spin, Icon } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class Progressing extends React.Component {
  render() {
    return (
      //Spinner 
      <div class="proto">
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
            style={{ top: "20px" }}>
            <Form layout="vertical">{/* Project Title */}
              <FormItem label="Project Name">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please Enter Project Name!' }],
                })
                  (<Input />)}
              </FormItem>
              {/* Project Description */}
              <FormItem label="Description">
                {getFieldDecorator('description')(<Input type="textarea" />)}
              </FormItem>
              {/* Project Id */}
              <FormItem label="ProjectID">
                {getFieldDecorator('project_id')(<Input />)}
              </FormItem>
              {/* Document Type */}
              <FormItem {...formItemLayout} label="Select Document Type" hasFeedback>
                {getFieldDecorator('document_type')(
                  <Select placeholder="Please select a country">
                    <Option value="csv">CSV</Option>
                    <Option value="xml">XML</Option>
                  </Select>
                )}
              </FormItem>
              {/* File header */}
              <FormItem className="collection-create-form_last-form-item" label="File have header's ?">
                {getFieldDecorator('headerSet', {
                  initialValue: 'public',
                })(
                  <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
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