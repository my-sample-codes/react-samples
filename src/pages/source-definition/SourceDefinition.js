import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Steps, Breadcrumb,Card, Icon } from 'antd';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import SourceCards from './sourcecards';
import CardTable from './cardtable';
const Step = Steps.Step;

export default class SourceDefinition extends Component {

    state = {
        percent: 0,
      }

      showProgress = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.setState({ percent });
      }

    render() {
        return (
            <div>
                <Breadcrumb className="breadcumb">
                <Breadcrumb.Item>
                <Steps size="small" current={0}>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb>

                <h2>Source Definition</h2>
               
             <div>{/*  <Link to="/LayoutDefinition"> */}<SourceCards/>{/* </Link> */}</div>
             <div><CardTable/></div>

                <br /><br />
                   
                  <Link to="/Home">
                    <Button className="btn">Back</Button>
                  </Link>
                    <Link to="/LayoutDefinition">
                        <Button type='primary' >Next</Button>
                    </Link>
              
            </div>

        )
    }
}
