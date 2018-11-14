import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Layout } from 'antd';

import NavigationBar from './sidebar/navigation-bar';
import Body from './body/body';

const { Sider } = Layout;

class LandingPage extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <NavigationBar />
        </Sider>
        
        <Layout>
          <Body />
        </Layout>
        
      </Layout>
    );
  }
}
export default LandingPage;