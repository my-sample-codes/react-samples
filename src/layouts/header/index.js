import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown ,Button } from 'antd';
import 'antd/dist/antd.css';
import './header.css';
import SourceDefinition from '../../pages/source-definition/SourceDefinition';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const { Header } = Layout;
const Search = Input.Search;

const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <a>You are all caught up! </a>

    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <a>No new messages</a>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu className="menu">
    <Menu.Item key="0">
      <a >Edit Profile</a>
    </Menu.Item>
    <Menu.Divider className="menu9" />
    <Menu.Item key="1">
      <a >View Profile</a>
    </Menu.Item>
    <Menu.Divider  className="menu9"/>
     <Menu.Item key="2">
      <a >Sign Out</a>
    </Menu.Item>
   
  </Menu>
);

class Headers extends Component {
  render() {
    return (

      
      <Header className='header' style={{padding:'1px'}} >

        <Search className="nav-area1"
          placeholder=" search here"
          onSearch={value => console.log(value)}
          enterButton
        />

        <div className="iconlist" >
        <Dropdown overlay={menu1} trigger={['click']}>
            <a className="iconbell" href="#">
              <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
            </a>
          </Dropdown>


        <Dropdown overlay={menu2} trigger={['click']}>
            <a className="iconbell" href="#">
              <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
              
            </a>
          </Dropdown>
        <Dropdown overlay={menu3} trigger={['click']} onClick={this.showModal}>
            <a className="iconbell" href="#">
              <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
            </a>
           
        </Dropdown>
        {/* <Button type="dashed" >
           < Icon type="plus" />
         </Button>
        */}

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