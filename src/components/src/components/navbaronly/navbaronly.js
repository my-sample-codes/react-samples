import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import CustomIcon from '../icon/customicon';
import './navbaronly.css';

const { Header } = Layout;

class Navbaronly extends Component {

    render() {
      return (
                   
            <Header className = "headerclass">
             
                <Menu className="nav-area"
                   theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
             
                <CustomIcon/>
                
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                
                </Menu>
                
            </Header>
    
         
        );
    }
}    

export default Navbaronly;