import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './siderlayout.css';
import 'antd/dist/antd.css';
import App from './../../App';
import NavigationBar from './../sidebar/index';
import SourceDefinition from './../../pages/source-definition/SourceDefinition';

const { Header, Sider, Content } = Layout;
export default class SiderLayout extends React.Component{
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
  
    render() {
      return (
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
           <NavigationBar/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
             <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
               <SourceDefinition/>
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
  