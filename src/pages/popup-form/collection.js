import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio, Select, Spin } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, visible_spin } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 6 },
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
        >
        {/* <Spin size="large" visible={false} /> */}
        <Form layout="vertical">
              {/* Project Title */}
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
            <FormItem label="Project ID">
              {getFieldDecorator('project_id')(<Input  />)}
            </FormItem>
            {/* Document Type */}
            <FormItem {...formItemLayout} label="Select Document Type" hasFeedback>
              {getFieldDecorator('document_type', {
                rules: [
                  { required: true, message: 'Please select your document type!' },
                  ],
                })(
                  <Select placeholder="Please select a country">
                    <Option value="csv">CSV</Option>
                    <Option value="xml">XML</Option>
                  </Select>
                )}
            </FormItem>
            {/* File header */}
            <FormItem className="collection-create-form_last-form-item" label="File have header's ?">
              {getFieldDecorator('modifier', {
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
        </div>
      );
    }
  }
);

export default CollectionCreateForm;