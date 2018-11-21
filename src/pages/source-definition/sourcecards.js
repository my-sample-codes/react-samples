import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon} from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './cards.css'
import './iconcss.css'
import IconCards from './icon';
import LayoutDefinition from './../layout-definition/LayoutDefinition';

const { Content } = Layout;

class SourceCards extends Component {
    
    render() {
      return (
    <Content >
        <div className = "cardsbackground">
       <tr>
       <Row gutter={16}>
      <Col span={7}>
   
      <Card className = "parentclassstyle" >
            {/* <Icon className="addiconcss" type="file-text" theme="filled" twoToneColor="deeppink" /> */}
            <Link to="/LayoutDefinition"><Card className = "stylecards"  title="CSV" bordered={true} >
            
           Create Configuration for CSV file Sources</Card> </Link>
            
            </Card>
           
      </Col>

      <Col span={7}>
     
        <Card className = "parentclassstyle1">
          {/* <Icon className="addiconcss" type="file-text" theme="filled" twoToneColor="deeppink" /> */}
          <Link to="/LayoutDefinition">  <Card className = "stylecards" title="XLS/XLSX" bordered={true}>Create configuraion for excel file sources</Card></Link>
            </Card>
            
      </Col>
      <Col span={7}>
      
      <Card className = "parentclassstyle2">
          {/* <Icon className="addiconcss" type="file-text" theme="filled" twoToneColor= "rgb(226, 74, 104)" /> */}
          <Link to="/LayoutDefinition"><Card className = "stylecards" title="Other" bordered={true}>Browse repo / marketplace for more</Card> </Link>
            </Card>
           
           
      </Col>
    
    </Row>
            
        </tr><br/><br/><br/><br/><br/>
      </div>
    </Content>
 
      );
    }
}

export default SourceCards;

