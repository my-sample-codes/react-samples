import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import './customicon.css';

const menu = (
    <Menu>
    
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">Edit Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Sign Out</a>
      </Menu.Item>
      
      {/* <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
   
    </Menu>
  );

class CustomIcon extends Component {

    render() {
      return (              
       
        <Dropdown overlay={menu} trigger={['click']}>    
          <Icon className="icon" type="user" theme="outlined" />
        </Dropdown>          
            
      );
    }
}    

export default CustomIcon;