import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, InputNumber, Radio, Select, Spin, Icon } from 'antd';
import './recon-popup.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const CreateReconForm = Form.create()(
  class extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
          inputValue: '1',
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({inputValue: event})
      console.log("inval::", this.state.inputValue)
    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;

      return (
        <div>
          <Modal 
            visible={visible}
            title="Reconciliation"
            okText="Next"
            onCancel={onCancel}
            onOk={onCreate}
            className="reconForm"
            >
            <Form>
              <FormItem label="Profile Description">
                {(<Input value="Store Payments & Samson Billing"/>)}
              </FormItem> 

              <br/>
              <br/>

              <FormItem label="Number of Data Sources" style={{display: 'flex', flexDirection: 'row'}}>
                {(<InputNumber min={1} max={10} defaultValue={1}
                                value={2}                       // remove this line when non-static value to be shown
                                onChange={this.handleChange}
                                style={{marginLeft:'15px', width:"115px"}}  />)}
                {/* <Button type="primary" shape="circle" icon="check" size='medium' style={{marginLeft:'15px'}} /> */}
              </FormItem>

              <FormItem label="Source A" style={{display: 'flex', marginLeft: "97px"}}>
                <Select
                  showSearch
                  placeholder="Select Source A"
                  style={{width: "230px", marginLeft: "15px"}}
                >
                  <Option value="BOA-Recon">BOA-Recon</Option>
                  <Option value="First Data">First Data</Option>
                  <Option value="Vantiv">Vantiv</Option>
                  <Option value="Chase Payment">Chase Payment</Option>
                  <Option value="Samson">Samson</Option>
                </Select>

              </FormItem>

              
              <FormItem label="Source B" style={{display: 'flex', marginLeft: "97px"}}>
                <Select
                  showSearch
                  placeholder="Select Source B"
                  style={{width: "230px", marginLeft: "15px"}}
                >   
                  <Option value="BOA-Recon">BOA-Recon</Option>
                  <Option value="First Data">First Data</Option>
                  <Option value="Vantiv">Vantiv</Option>
                  <Option value="Chase Payment">Chase Payment</Option>
                  <Option value="Samson">Samson</Option>
                </Select>

              </FormItem>

            </Form>
          </Modal>
        </div>
      );
    }
  }
);
export default CreateReconForm;
