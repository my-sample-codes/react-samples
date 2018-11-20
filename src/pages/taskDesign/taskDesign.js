// @flow

import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { Diagram, store, setEntities, setConfig, diagramOn, setCustom } from 'react-flow-diagram';
import { custom, config, customEntities } from './config-example';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb } from 'antd';
import UploadFile from './component/UploadFile';
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
  max-width: 95em;
  padding: 1em;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-flow: column nowrap;
  min-height: 95vh;
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
    //this.handleClickUpload = this.handleClickUpload.bind(this);
    this.getFileName = this.getFileName.bind(this);
    this.uploadConfiguredData();
  }


  handleClick() {
    console.info('HandleClick method - Latest Entity - ', this.state.diagramEntityState);
    var jsonObject = this.state.diagramEntityState;
    fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObject)
      }).then(response => {
      console.log('saved successfully', response);
      if (response.status == 200) {

        }
        }).catch(err => err); 

    // axios.post(`http://localhost:8080/api`, { jsonObject })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })

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
  render() {
   
    return (
      <Main>
        <Breadcrumb className="breadcumb">
          <Breadcrumb.Item>
            <Steps size="small" current={3}>
              <Step title="Source Definition" />
              <Step title="Layout Definition" />
              <Step title="Record Tokenizer" />
              <Step title="Task Design" />
            </Steps></Breadcrumb.Item>
        </Breadcrumb>
        <h2>Task Designer</h2>

        <Diagram customEntities={customEntities} />
        <div>
          <Link to="/RecordTokenizer">
            <Button className="btn">Back</Button>
          </Link>
          <Button type='primary' className="btn">Complete Step</Button>
          <Button onClick={this.handleClick} >Save Diagram</Button>
          <UploadFile getFileName = {this.getFileName}/>
        </div>

      </Main>
    );
  }

  uploadConfiguredData() {
    var data = require('./input.json');
    this.entityArray = [{"height": 64,"id": "joo8293n","name": "contest","width": 64,"x": 85,"y": 95}]
    this.entityArray[0].type = data.object.source.sourceType;
    this.entityArray[0].custom = data.object.source;
    store.dispatch(setEntities(this.entityArray));
  } 
  
  getFileName(fileName) {
    this.state.fileName = fileName;
    var data = require('./'+fileName);
    store.dispatch(setEntities(data));
    // axios.get('./demo/src/' + this.state.fileName) // JSON File Path
    //   .then(response => {
    //     this.state.model = response.data;
    //     store.dispatch(setEntities(this.state.model.jsonObject));
    //   })
  }


  // handleClickUpload() {

  //   axios.get('./demo/src/diagram.json') // JSON File Path
  //     .then(response => {
  //       this.state.model = response.data;
  //       store.dispatch(setEntities(this.state.model.jsonObject));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });


  // }
}
