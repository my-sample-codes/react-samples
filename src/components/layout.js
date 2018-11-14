import React, { Component } from 'react';
import { Layout } from 'antd';
import SideGrid from './sidegrid';
import 'antd/dist/antd.css';
import Headers from '../pages/header/header';
import Footers from '../pages/footer';

const { Sider } = Layout;

class Layot extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible> <SideGrid/> </Sider>  
          <Layout>
            <Headers/>
           <Footers/>
          </Layout>
        </Layout>
      );
    }
  }

  export default Layot;