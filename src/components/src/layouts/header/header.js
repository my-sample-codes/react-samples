import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './header.css'
import CustomIcon from '../../components/icon/customicon';

const { Header } = Layout;

class Headers extends Component {

  render() {
    return (
      <Header className='header'>
        <CustomIcon/>
        Opus Recon Engine
      </Header>
    );
  }
}
export default Headers;