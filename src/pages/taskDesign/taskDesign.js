// @flow

import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { Diagram, store, setEntities, setConfig, diagramOn, setCustom } from 'react-flow-diagram';
import { custom, config, customEntities } from './config-example';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio, Steps, Breadcrumb } from 'antd';
import axios from 'axios';
// import UploadFile from 'react-flow-diagram';
// import {JSONReaderHandler} from '../src/jsonFile';
const Step = Steps.Step;
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;

const Main = styled.main`
  max-width: 85em;
  padding: 1em;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-flow: column nowrap;
  min-height: 85vh;
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
    this.handleClickUpload = this.handleClickUpload.bind(this);
    this.getFileName = this.getFileName.bind(this);
    //  var inputData = JSONReaderHandler.getJsonFileContent();
    // console.log('InputData' ,   inputData);
  }


  handleClick() {
    console.info('HandleClick method - Latest Entity - ', this.state.diagramEntityState);
    var jsonObject = this.state.diagramEntityState;
    axios.post(`http://localhost:8080/api`, { jsonObject })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }

  handleClickUpload() {

    axios.get('./demo/src/diagram.json') // JSON File Path
      .then(response => {
        this.state.model = response.data;
        store.dispatch(setEntities(this.state.model.jsonObject));
      })
      .catch(function (error) {
        console.log(error);
      });


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
          {/* <UploadFile getFileName = {this.getFileName}/> */}
        </div>

      </Main>
    );
  }

  getFileName(fileName) {
    this.state.fileName = fileName;
    console.log('FileName', this.state.fileName);
    axios.get('./demo/src/' + this.state.fileName) // JSON File Path
      .then(response => {
        this.state.model = response.data;
        store.dispatch(setEntities(this.state.model.jsonObject));
      })
  }

}
