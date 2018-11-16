import React, { Component } from 'react';
import { Menu, Icon, Input, Dropdown, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './header.css'
import "antd/dist/antd.css";
import user from '../header/Capture.PNG';

const Search = Input.Search;


const menu = (
  <Menu className="test">
    <Menu.Item >
      <a target="_blank" rel="noopener noreferrer" href="http://10.11.14.80:8081/recon/user/get">Edit Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" >Signout</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">View Prfoile</a>
    </Menu.Item>
  </Menu>
);

const msg = (
  <Menu className="test">
    <Menu.Item >
      <a target="_blank" rel="noopener noreferrer" href="http://10.11.14.80:8081/recon/user/get">Please check the the new Recon</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" >Part of the today's Recon is done</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Thats really great</a>
    </Menu.Item>
  </Menu>
);

const notify = (
  <Menu className="test">
    <Menu.Item >
      <a target="_blank" rel="noopener noreferrer" href="http://10.10.18.20:8080">Update the current table</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" >Section 3 viewed table 45</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">sdrftgyhujiosection 1 updateed table32</a>
    </Menu.Item>
  </Menu>
);

class Headers extends Component {
  render() {
    return (
      <div className='header'>

        <Search className="nav-area1"
          placeholder=" search here"
          onSearch={value => console.log(value)}
          enterButton
        />

        <div className="iconlist" >
          <Dropdown overlay={notify} trigger={['click']}>
            <a><Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} /></a>
          </Dropdown>

          <Dropdown overlay={msg} trigger={['click']}>
            <a><Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} /></a>
          </Dropdown>

          <Dropdown overlay={menu} trigger={['click']}>
            <a><Avatar src={user} className="user"/></a>
          </Dropdown>
              
        </div>
      </div>
    );
  }
}
export default Headers;
