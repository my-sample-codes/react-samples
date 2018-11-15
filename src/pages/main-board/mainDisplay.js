import React, { Component } from 'react';
import { Steps, Breadcrumb, Modal, Spin, Card, Col, Row, Button, Icon, Avatar } from 'antd';
import CollectionCreateForm from '../popup-form/collection'
import axios from 'axios';
export default class mainDisplay extends Component {
  state = { visible: false, loadervisible: false, };
  // Performing a POST request
  setVal(values) {
    axios.post('http://10.10.18.20:8080/recon/product/save/',
      {
        productName: values.title,
        productDescription: values.description,
        productId: values.ProjectID,
        documentType: values.document_type,
        headerPresent: values.headerSet
      }).then(function (response) {
        console.log('saved successfully', response);
        if (response.status == 200) {
          setTimeout(() => this.setState({ loadervisible: false }), 800);
          // this.setState({loadervisible: false});
          console.log("in IF");
        }
      }.bind(this));
  }
  showModal = () => { this.setState({ visible: true }); }
  handleCancel = () => { this.setState({ visible: false }); }
  handleCancel1 = () => { this.setState({ loadervisible: false }); }
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.setState({ visible: false });
      this.setState({ loadervisible: true });
      this.setVal(values);
      form.resetFields();
    });
  }
  saveFormRef = (formRef) => { this.formRef = formRef; }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Create New Project</Button>
        <CollectionCreateForm
          // Modal 1 for "New Project" Form
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          //Modal 2 for Spinner
          visible1={this.state.loadervisible}
          onCancel1={this.handleCancel1}
          onCreate2={this.handleCreate2} />
      </div>
    );
  }
}