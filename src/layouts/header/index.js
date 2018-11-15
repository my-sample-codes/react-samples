import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import './header.css'
import "antd/dist/antd.css";

const { Header } = Layout;
const Search = Input.Search;

const menu = (
  <Menu className="test">
    <Menu.Item >
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" >2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);


class Headers extends Component {
  render() {
    return (
      <Header className='header'>

        <Search className="nav-area1"
          placeholder=" search here"
          onSearch={value => console.log(value)}
          enterButton
        />

        <div className="iconlist" >
          <Dropdown overlay={menu}>
            <a className="iconbell" href="#">
              <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
              <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
              <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
export default Headers;

  /* 
      <div className="logo">
          <img src={tmobiles} alt="tmobiles" className="logo_img" />
        </div>
          <div className="logo" />
           <Icon className="icon" type="user" theme="filled" />




<Menu className="nav-area"
  theme="dark"
  mode="horizontal"
  defaultSelectedKeys={['2']}
  style={{ lineHeight: '64px' }}
>


  <Search className="nav-area1"
    placeholder=" search here"
    onSearch={value => console.log(value)}
    enterButton
  />

  <div className="iconlist" >
    <Dropdown overlay={menu}>
      <a className="iconbell" href="#">
        <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
        <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
        <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
      </a>
    </Dropdown>
  </div>

</Menu> */