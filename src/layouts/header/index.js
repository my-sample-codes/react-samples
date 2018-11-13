import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './header.css'

const { Header } = Layout;

class Headers extends Component {

  render() {
    return (
      <Header className='header'>
        Opus Recon Engine
      </Header>
    );
  }
}
export default Headers;