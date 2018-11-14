import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

class Footers extends Component {
    
    render() {
      return (
        <Footer style={{ textAlign: 'center', backgroundColor: 'grey', padding: 1 }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
          
      );
    }
  }

  export default Footers;