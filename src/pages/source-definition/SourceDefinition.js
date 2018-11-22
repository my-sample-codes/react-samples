import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Steps, Breadcrumb,Card, Icon, Row, Col,Upload , message, Popover } from 'antd';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import Tables from './../table/table';
// import SourceCards from './sourcecards';
import CardTable from './cardtable';
// import SourceButton from './SourceButton';
//import DatasetCard from './DatasetCard';
import './uploadbutton.css'
import './SourceDefinition.css'

const Step = Steps.Step;

const hoverContent = (
  <div>
            <p>Here you can manage and manage the datasets you added.</p>
              <p>A dataset holds a raw data that can be used as a raw material</p>
              <p>without affecting your original data</p>
           
              <Link to="/LayoutDefinition"><a>Skip</a></Link>
                   
              
  </div>
);


const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


export default class SourceDefinition extends Component {
    state = {
        percent: 0,
        clicked: false,
        hovered: false,
      }


      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    

      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

      showProgress = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.setState({ percent });
      }

 
      //-----------------

    render() {

     
        return (
            <div>
                <Breadcrumb className="breadcumb">
                <Breadcrumb.Item>
                <Steps size="small" current={0} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb>

                <h2>Source Definition</h2>
               
                <Row>
                    <Col span={8}>
                    <header className="title-upload">Choose your file format:</header>
                    
                    </Col>
                    <Col span={8}>
                   
                       
                       <Popover placement = "right" title="Datasets"
                               content={hoverContent}                               
                                // <DatasetCard/>
                            
                            >
                            <div>
                            <Upload {...props}
                       >  
                                <Button className="upload-button" >
                               {/* {this.state.isToggleOn ? (
                                 'ON'
                                 ) : (<Upload {...props} />) }  */}

                                 <Icon type="plus-circle" theme="twoTone" /> &nbsp;&nbsp;&nbsp; Add Dataset
                                 
                                </Button>  
                                </Upload><br/>
                                <Link to="Tables">
                                <Button className="upload-button">Auto Configuration</Button>
                                </Link>
                                </div>
                                </Popover>
                     
                     
                    </Col>
                 </Row>
               <br/>
               <br/>
            <header className="dup-etl-header">Duplicate ETL Jobs:</header>
               <br/>
               <br/>

               <div><CardTable/></div>

                <br /><br />
                   
                  <Link to="/Login">
                    <Button className="btn">Back</Button>
                  </Link>
                    <Link to="/LayoutDefinition">
                        <Button type='primary' >Next</Button>
                    </Link>
              
            </div>

        )
    }
}
