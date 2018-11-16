import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Layout } from 'antd';
import NavigationBar from './sidebar';
import Body from './body';
import Routes from './../pages/routes/Routes';
const { Sider } = Layout;

class LandingPage extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>{/*  collapsible */}
          <NavigationBar />
        </Sider>  
        <Layout>
         <Body/>
        </Layout>
      </Layout>
    );
  }
}
export default LandingPage;