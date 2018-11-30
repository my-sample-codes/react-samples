import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown ,Button } from 'antd';
import 'antd/dist/antd.css';
import './header.css';
import SourceDefinition from '../../pages/source-definition/SourceDefinition';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Image from '../../components/navbar-logo/image';
import CustomHeader from './../../components/header/index'
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
    <Icon type="profile"/>
            <span>
      <a style={{color:'#757E82'}}>Edit Profile</a></span>
    </Menu.Item>
    <Menu.Divider className="menu9" />
    <Menu.Item key="1">
    <Icon type="read"/>
            <span>
      <a style={{color:'#757E82'}}>View Profile</a></span>
    </Menu.Item>
    <Menu.Divider  className="menu9"/>
     <Menu.Item key="2">
     <Icon type="logout" />
            <span>
      <a style={{color:'#757E82'}}>Sign Out</a></span>
    </Menu.Item>
   
  </Menu>
);

class Headers extends Component {
  constructor(props){
    super(props);
    
    this.showDrawar = this.showDrawar.bind(this);
    }
    
    showDrawar(){
    this.props.click();
    }
    
    
    render() {
    return (
    <div>
    <CustomHeader showBurgerMenu = {false} showIcon = {true} showDrawar = {this.showDrawar}/>
    </div> 
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