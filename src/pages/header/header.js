import React, { Component } from 'react';
import { Layout, Breadcrumb, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Tables from '../table';
import './header.css';
import Breadcumb from '../../components/breadcumb';

const { Header, Content } = Layout;

class Headers extends Component {
    
    render() {
      return (
        <Layout >
        
            <Header className="header"/>
            <Content className="content">
              <Breadcumb/>
              <div className="content_area" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Please select the Date<DatePicker/>
                <Tables/>
              </div>            
            </Content>
        
        </Layout>
      );
    }
  }

  export default Headers;