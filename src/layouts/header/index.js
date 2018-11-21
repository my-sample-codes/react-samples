import React, { Component } from 'react';
import { Menu, Icon, Input, Dropdown, Avatar, Modal } from 'antd';
import 'antd/dist/antd.css';
import './header.css'
import "antd/dist/antd.css";
import user from '../header/user.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Search = Input.Search;





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
      Update the current table
    </Menu.Item>
    <Menu.Item>
      Section 3 viewed table 45
    </Menu.Item>
    <Menu.Item>
      section 1 updateed table32
    </Menu.Item>
  </Menu>
);

const menu = (
  <Menu className="test" >
    <Menu.Item key="editProfile">
      <a target="_blank" rel="noopener noreferrer" href="http://10.11.14.80:8081/recon/user/get">Edit Profile</a>
    </Menu.Item>
    <Menu.Item key="signOut">
      Signout
    </Menu.Item>
    <Menu.Item key="viewProfile">
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">View Prfoile</a>
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
            <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
          </Dropdown>

          <Dropdown overlay={msg} trigger={['click']}>
            <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
          </Dropdown>

          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar src={user} className="user"/>
          </Dropdown>
              
        </div>
      </div>
    );
  }
}
export default Headers;
