// @flow

import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { Diagram, store, setEntities, setConfig, diagramOn, setCustom } from 'react-flow-diagram';
import { custom, config, customEntities } from './config-example';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb } from 'antd';
import UploadFile from './component/UploadFile';
/* import playImage from './../../../assets/playOptimized.png'; */
import {Icon} from 'antd';
const Step = Steps.Step;

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;

const Main = styled.main`
  max-width: 200em;
  padding: 1em;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-flow: column nowrap;
  min-height: 90vh;
  
`;


export default class TaskDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diagramEntityState: null,
      model: {},
      fileName: '',
      inputFileData: {},
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getFileName = this.getFileName.bind(this);
    this.uploadConfiguredData();
  }

  componentWillMount() {
    store.dispatch(setConfig(config));

    diagramOn('anyChange', entityState => {
      this.setState({
        diagramEntityState: entityState,
      });
      console.log("Latest Entity - ", this.state.diagramEntityState);
    });
  }

  handleClick() {
    console.info('HandleClick method - Latest Entity - ', this.state.diagramEntityState);
    var flowData = this.state.diagramEntityState;
    console.log('FlowData id  ', flowData[0].id);
    fetch('http://localhost:8082/recon/taskFlowData/', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({entityId : flowData[0].id, flowData : flowData})
      }).then(response => {
      console.log('saved successfully', response);
      if (response.status == 200) {
            alert('Data saved successfully');
        }
        }).catch(err => err); 
  }
  
  render() {
   
    return (
      <Main>
       <Breadcrumb className="breadcumb" style={{marginTop:'-1%',marginBottom:'2%'}}>
                <Breadcrumb.Item>
                <Steps size="small" current={3} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb>  
        <div>
        <Icon type="play-circle" style={{ fontSize: '28px' , paddingLeft : 1020, color: '255' }} />
        </div>
        <Diagram customEntities={customEntities} />
        <div>
          <Link to="/RecordTokenizer">
            <Button className="ant-btn btn ant-btn-primary">Back</Button>
          </Link>
          {/* <Button type='primary' className="btn">Complete Step</Button> */}
          <Button className="ant-btn btn ant-btn-primary" onClick={this.handleClick} >Save Diagram</Button>
          {/* <UploadFile getFileName = {this.getFileName}/> */}
        </div>

      </Main>
    );
  }

  uploadConfiguredData() {
    var data = require('./input.json');
    this.entityArray = [{"height": 64,"id": "joo8293n","name": "contest","width": 64,"x": 185,"y": 95}]
    this.entityArray[0].type = data.object.source.sourceType;
    this.entityArray[0].custom = data.object.source;
    store.dispatch(setEntities(this.entityArray));
  } 
  
  getFileName(fileName) {
    this.state.fileName = fileName;
    var data = require('./'+fileName);
    store.dispatch(setEntities(data));
  }
}
