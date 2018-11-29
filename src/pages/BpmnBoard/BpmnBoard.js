import React, { Component } from "react";
import BpmnModeler from "./custom-modeler";
import { Button, Steps, Breadcrumb } from 'antd';
import "./style/app.less";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import xmlStr from "./assets/bpmn/xmlStr";
import customElements from './custom-elements.json';
import CSVDialogBox from './Components/CSVDialogBox'
import FormDialog from "./Components/FormDialog";
const Step = Steps.Step;

export default class BpmnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvIsOpen: false,
      formIsopen: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.csvDialogBoxStateChange = this.csvDialogBoxStateChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.showDialogBox = this.showDialogBox.bind(this);
    this.eventListener = this.eventListener.bind(this);
    this.formDialogBoxStateChange = this.formDialogBoxStateChange.bind(this);
    this.data = require('./input.json');
    console.log("this.data", this.data);
  }

  componentDidMount() {
    document.body.className = "shown";

    this.bpmnModeler = new BpmnModeler({
      container: "#canvas",
      keyboard: {
        bindTo: document
      }
    });
    const { xml = xmlStr } = this.props;

    this.renderDiagram(xml);
    this.eventListener()

  }

  eventListener() {
    var eventBus = this.bpmnModeler.get('eventBus');

    var events = [
      'element.hover',
      'element.out',
      'element.click',
      'element.dblclick',
      'element.mousedown',
      'element.mouseup'
    ];

    events.forEach(function (event) {
      eventBus.on(event, function (e) {
        if (event === 'element.dblclick') {
          this.showDialogBox(e)
        }
      }.bind(this));
    }.bind(this));

  }


  showDialogBox(e) {

    if (e.element.type === "custom:csv" || e.element.type === "custom:xls") {
      this.setState({ csvIsOpen: true });
    } else if (e.element.type === "bpmn:StartEvent" || e.element.type === "bpmn:EndEvent" || e.element.type === "bpmn:Task") {
      this.setState({ formIsopen: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { xml } = nextProps;
    if (xml && xml !== this.props.xml) {
      this.renderDiagram(xml);
    }
  }



  renderDiagram = (xml) => {
    this.bpmnModeler.importXML(xml, err => {
      if (err) {
        // import failed :-(
        console.log("error rendering", err);
      } else {
        // we did well!
        this.bpmnModeler.getDefinitions();
        this.bpmnModeler.addCustomElements(customElements);
        console.log("successfully rendered");
      }
    });
  };

  handleSave(event) {
    this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
      console.log(xml);
    });
  }

  csvDialogBoxStateChange() {
    this.setState({ csvIsOpen: false });
  }

  formDialogBoxStateChange() {
    this.setState({ formIsopen: false });
  }

  render() {
    return (

      <div>
        <Breadcrumb className="breadcumb" style={{ marginTop: '-1%', marginBottom: '2%' }}>
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
          <CSVDialogBox isOpen={this.state.csvIsOpen} dialogBoxStateChange={this.csvDialogBoxStateChange} data={this.data.object.source.dataFields} />
          <FormDialog isOpen={this.state.formIsopen} dialogBoxStateChange={this.formDialogBoxStateChange} />
        </div>

        <div id="canvas" />
        <div>
          <Link to="/RecordTokenizer">
            <Button className="ant-btn btn ant-btn-primary">Back</Button>
          </Link>
          <Button className="ant-btn btn ant-btn-primary" onClick={this.handleSave} >Save Diagram</Button>
        </div>
      </div>
    );
  }
}
