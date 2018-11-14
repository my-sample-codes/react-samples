import React, { Component } from 'react';
import {Steps,Breadcrumb,Modal,Spin,Card, Col, Row, Button, Icon,Avatar} from 'antd';
import CollectionCreateForm from '../popup-form/collection'

export default class mainDisplay extends Component {
    state = {visible: false,visible_spin: false,};
      showModal = () => {this.setState({ visible: true });}
      handleCancel = () => {this.setState({ visible: false });}
    
      handleCreate = () => {
         const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
          this.setState({visible_spin:true});
        });
      }
      saveFormRef = (formRef) => {this.formRef = formRef;}
      
      render() {
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>Create New Project</Button>
            <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
              visible_spin={this.state.visible_spin}
            />
            </div>  
        );
      }
    }


    // Basis
    // state = { visible: false }

    // showModal = () => {
    //   this.setState({
    //     visible: true,
    //   });
    // }
  
    // hideModal = () => {
    //   this.setState({
    //     visible: false,
    //   });
    // }

    // render() {
    //     return (
    //       <div>
    //         <Button type="primary" onClick={this.showModal}>Create New Project</Button>
    //         <Modal
    //           title="Modal"
    //           visible={this.state.visible}
    //           onOk={this.hideModal}
    //           onCancel={this.hideModal}
    //           okText="ok"
    //           cancelText="cancel"
    //         >
    //           <p>Bla bla ...</p>
    //           <p>Bla bla ...</p>
    //           <p>Bla bla ...</p>
    //         </Modal>
    //       </div>
    //     );
    //   }


      // Orignal
    // render() {
    //     return (
    //         <div> 
    //                 <center>
    //                 <popupForNewProject />
    //                     <Link to="/popupForm">
    //                     <popupForm />
    //                         <Button type='primary' onClick={}>Create New Project </Button>
    //                     </Link>
    //                 </center>
    //         </div>

    //     )   
    // }

